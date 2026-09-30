const path = require("node:path");
const { createApp } = require("./http.cjs");
const { webhookRoute } = require("./shopify.cjs");
function buildServer({
  database = path.join(__dirname, "../.data/demo.sqlite"),
  secret = process.env.SHOPIFY_WEBHOOK_SECRET,
  shop = process.env.SHOPIFY_SHOP_DOMAIN,
  rateLimit = true,
} = {}) {
  return createApp({
    root: path.join(__dirname, "../web"),
    database,
    workspace: require("./workspace.cjs"),
    extraRoute: webhookRoute({ secret, shop }),
    rateLimit,
  });
}
if (require.main === module)
  buildServer().listen(
    Number(process.env.PORT || 4000),
    process.env.HOST || "127.0.0.1",
    () => console.log("Store operations: http://localhost:4000"),
  );
module.exports = { buildServer };
