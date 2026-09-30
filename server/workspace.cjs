const d = require("./domain.cjs");
const { text, HttpError } = require("./http.cjs");
module.exports = {
  title: "Cleanstore theme and operations",
  resources: {
    products: {
      label: "Demo inventory",
      adminOnly: true,
      shared: true,
      uniqueField: "sku",
      fields: [
        d.field("sku", "SKU"),
        d.field("name", "Product name"),
        d.field("priceCents", "Price in cents", "number", {
          min: 1,
          max: 1000000,
        }),
        d.field("stock", "Stock", "number", { min: 0, max: 10000 }),
      ],
      validate: (b) => ({
        sku: text(b.sku, "SKU", 40),
        name: text(b.name, "Name", 100),
        priceCents: d.integer(b.priceCents, "Price", 1, 1000000),
        stock: d.integer(b.stock, "Stock", 0, 10000),
      }),
    },
    orders: {
      label: "Demo orders",
      adminOnly: true,
      shared: true,
      readOnly: true,
      fields: [
        d.field("productId", "Product", "text", {
          source: "products",
          labelField: "name",
        }),
        d.field("quantity", "Quantity", "number", { min: 1, max: 20 }),
      ],
      validate(b, ctx) {
        const row = ctx.getRecord("products", b.productId, "public");
        if (!row) throw new HttpError(400, "Choose a product.");
        const item = JSON.parse(row.data),
          quantity = d.integer(b.quantity, "Quantity", 1, 20);
        if (item.stock < quantity)
          throw new HttpError(409, "Not enough stock.");
        item.stock -= quantity;
        ctx.db
          .prepare("UPDATE records SET data=?,version=version+1 WHERE id=?")
          .run(JSON.stringify(item), row.id);
        ctx.audit(ctx.user.id, "products", row.id, "stock reserved");
        return {
          productId: row.id,
          sku: item.sku,
          name: item.name,
          quantity,
          totalCents: item.priceCents * quantity,
          status: "demo",
        };
      },
    },
    "webhook-orders": {
      label: "Verified Shopify orders",
      adminOnly: true,
      shared: true,
      noCreate: true,
      readOnly: true,
      fields: [],
    },
  },
  seed: {
    products: [
      { sku: "DEMO-001", name: "Sample product", priceCents: 2500, stock: 20 },
    ],
  },
};
