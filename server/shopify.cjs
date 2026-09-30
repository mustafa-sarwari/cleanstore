const { createHmac, createHash, timingSafeEqual } = require("node:crypto");
const statuses = {
  "orders/create": "created",
  "orders/paid": "paid",
  "orders/cancelled": "cancelled",
};
const rank = { created: 1, paid: 2, cancelled: 3 };
function webhookRoute({ secret, shop }) {
  let initialized = false;
  return async (req, res, url, ctx) => {
    if (url.pathname !== "/api/shopify/webhooks") return false;
    if (req.method !== "POST")
      throw new ctx.HttpError(405, "Method not allowed.");
    if (!secret || !shop || !/^[a-z0-9][a-z0-9-]*\.myshopify\.com$/.test(shop))
      throw new ctx.HttpError(
        503,
        "Configure the Shopify webhook secret and exact shop domain.",
      );
    const topic = req.headers["x-shopify-topic"],
      delivery = req.headers["x-shopify-webhook-id"];
    if (
      req.headers["x-shopify-shop-domain"] !== shop ||
      !statuses[topic] ||
      typeof delivery !== "string" ||
      !/^[A-Za-z0-9._:-]{8,128}$/.test(delivery)
    )
      throw new ctx.HttpError(400, "Invalid shop, topic, or delivery ID.");
    const raw = await ctx.readBody(req, 1024 * 1024),
      signature = req.headers["x-shopify-hmac-sha256"];
    const expected = createHmac("sha256", secret).update(raw).digest();
    if (
      typeof signature !== "string" ||
      !/^[A-Za-z0-9+/]{43}=$/.test(signature) ||
      !timingSafeEqual(expected, Buffer.from(signature, "base64"))
    )
      throw new ctx.HttpError(401, "Invalid webhook signature.");
    let body;
    try {
      body = JSON.parse(raw.toString("utf8"));
    } catch {
      throw new ctx.HttpError(400, "Invalid webhook JSON.");
    }
    if (
      !body ||
      typeof body !== "object" ||
      Array.isArray(body) ||
      (typeof body.id === "number" && !Number.isSafeInteger(body.id)) ||
      !/^\d{1,30}$/.test(String(body.id))
    )
      throw new ctx.HttpError(400, "Invalid Shopify order ID.");
    const price = String(body.total_price),
      match = price.match(/^(\d{1,10})(?:\.(\d{1,2}))?$/);
    if (
      !match ||
      typeof body.currency !== "string" ||
      !/^[A-Z]{3}$/.test(body.currency)
    )
      throw new ctx.HttpError(400, "Invalid order amount or currency.");
    if (!initialized) {
      ctx.db.exec(
        "CREATE TABLE IF NOT EXISTS webhook_deliveries (delivery_id TEXT PRIMARY KEY, fingerprint TEXT NOT NULL, order_id TEXT NOT NULL, received_at TEXT NOT NULL)",
      );
      initialized = true;
    }
    const fingerprint = createHash("sha256").update(raw).digest("hex"),
      duplicate = ctx.db
        .prepare(
          "SELECT fingerprint FROM webhook_deliveries WHERE delivery_id=?",
        )
        .get(delivery);
    if (duplicate) {
      if (duplicate.fingerprint !== fingerprint)
        throw new ctx.HttpError(
          409,
          "Delivery ID already used with different content.",
        );
      ctx.send(res, 200, { accepted: true, duplicate: true });
      return true;
    }
    const data = {
      shopifyOrderId: String(body.id),
      name:
        typeof body.name === "string" ? body.name.slice(0, 100) : "#" + body.id,
      totalCents:
        Number(match[1]) * 100 + Number((match[2] || "").padEnd(2, "0")),
      currency: body.currency,
      status: statuses[topic],
    };
    ctx.db.exec("BEGIN IMMEDIATE");
    try {
      const previous = ctx.db
        .prepare(
          "SELECT * FROM records WHERE resource='webhook-orders' AND owner='public' AND json_extract(data,'$.shopifyOrderId')=?",
        )
        .get(data.shopifyOrderId);
      if (!previous)
        ctx.saveRecord("webhook-orders", data, "public", "shopify");
      else if (rank[data.status] >= rank[JSON.parse(previous.data).status]) {
        ctx.db
          .prepare("UPDATE records SET data=?,version=version+1 WHERE id=?")
          .run(JSON.stringify(data), previous.id);
        ctx.audit(
          "shopify",
          "webhook-orders",
          previous.id,
          "webhook " + data.status,
        );
      }
      ctx.db
        .prepare("INSERT INTO webhook_deliveries VALUES (?,?,?,?)")
        .run(
          delivery,
          fingerprint,
          data.shopifyOrderId,
          new Date().toISOString(),
        );
      ctx.db.exec("COMMIT");
    } catch (error) {
      ctx.db.exec("ROLLBACK");
      throw error;
    }
    ctx.send(res, 200, { accepted: true, duplicate: false });
    return true;
  };
}
module.exports = { webhookRoute };
