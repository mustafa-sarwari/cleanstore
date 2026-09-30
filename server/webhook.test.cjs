const { test } = require("node:test");
const assert = require("node:assert/strict");
const { once } = require("node:events");
const { createHmac } = require("node:crypto");
const fs = require("node:fs");
const os = require("node:os");
const path = require("node:path");
const { buildServer } = require("./index.cjs");
test("signed Shopify events persist, deduplicate, preserve status, and omit customer details", async () => {
  const directory = fs.mkdtempSync(path.join(os.tmpdir(), "shopify-events-")),
    database = path.join(directory, "events.sqlite"),
    secret = "test-webhook-secret",
    shop = "example.myshopify.com";
  let server, url;
  const start = async () => {
    server = buildServer({ database, secret, shop, rateLimit: false });
    server.listen(0, "127.0.0.1");
    await once(server, "listening");
    url = "http://127.0.0.1:" + server.address().port;
  };
  const post = (topic, id, body, signature) => {
    const raw = JSON.stringify(body);
    return fetch(url + "/api/shopify/webhooks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Shop-Domain": shop,
        "X-Shopify-Topic": topic,
        "X-Shopify-Webhook-Id": id,
        "X-Shopify-Hmac-Sha256":
          signature ||
          createHmac("sha256", secret).update(raw).digest("base64"),
      },
      body: raw,
    });
  };
  try {
    await start();
    const order = {
      id: 123,
      name: "#123",
      total_price: "51.25",
      currency: "USD",
      email: "private@example.org",
      shipping_address: { street: "Private street" },
    };
    assert.equal(
      (await post("orders/create", "delivery-0001", order, "invalid")).status,
      401,
    );
    assert.equal(
      (await post("orders/paid", "delivery-0001", order)).status,
      200,
    );
    const replay = await post("orders/paid", "delivery-0001", order);
    assert.equal(replay.status, 200);
    assert.equal((await replay.json()).duplicate, true);
    assert.equal(
      (
        await post("orders/paid", "delivery-0001", {
          ...order,
          total_price: "1.00",
        })
      ).status,
      409,
    );
    assert.equal(
      (await post("orders/create", "delivery-0002", order)).status,
      200,
    );
    assert.equal(
      (await post("orders/cancelled", "delivery-0003", order)).status,
      200,
    );
    assert.equal(
      (await post("orders/paid", "delivery-0004", order)).status,
      200,
    );
    const signup = await fetch(url + "/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: "Owner",
        email: "owner@example.org",
        password: "A long secure password 123!",
      }),
    });
    assert.equal(signup.status, 201);
    const cookie = signup.headers.get("set-cookie").split(";")[0];
    const rows = await (
      await fetch(url + "/api/webhook-orders", { headers: { Cookie: cookie } })
    ).json();
    assert.equal(rows.length, 1);
    assert.equal(rows[0].status, "cancelled");
    assert.equal(rows[0].totalCents, 5125);
    assert.equal(JSON.stringify(rows).includes("private@example.org"), false);
    assert.equal(JSON.stringify(rows).includes("Private street"), false);
    await new Promise((resolve) => server.close(resolve));
    await start();
    assert.equal(
      (await (await post("orders/paid", "delivery-0001", order)).json())
        .duplicate,
      true,
    );
  } finally {
    if (server.listening) await new Promise((resolve) => server.close(resolve));
    fs.rmSync(directory, { recursive: true, force: true });
  }
});
