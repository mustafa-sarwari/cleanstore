const { test } = require("node:test");
const assert = require("node:assert/strict");
const { once } = require("node:events");
const { buildServer } = require("./index.cjs");
test("inventory reservations use stored prices, reject overselling, and retry once", async () => {
  const server = buildServer({ database: ":memory:" });
  server.listen(0, "127.0.0.1");
  await once(server, "listening");
  const url = "http://127.0.0.1:" + server.address().port;
  let cookie = "";
  const call = (route, method = "GET", body, headers = {}) =>
    fetch(url + route, {
      method,
      headers: {
        "Content-Type": "application/json",
        Cookie: cookie,
        ...headers,
      },
      ...(body ? { body: JSON.stringify(body) } : {}),
    });
  try {
    const signup = await call("/api/auth/register", "POST", {
      name: "Owner",
      email: "owner@example.org",
      password: "A long secure password 123!",
    });
    cookie = signup.headers.get("set-cookie").split(";")[0];
    const [product] = await (await call("/api/products")).json(),
      body = { productId: product.id, quantity: 15, totalCents: 1 };
    let result = await call("/api/orders", "POST", body, {
      "Idempotency-Key": "stock-test-12345",
    });
    assert.equal(result.status, 201);
    assert.equal((await result.json()).totalCents, 37500);
    assert.equal(
      (
        await call("/api/orders", "POST", body, {
          "Idempotency-Key": "stock-test-12345",
        })
      ).status,
      200,
    );
    assert.equal((await call("/api/orders", "POST", body)).status, 409);
    const current = await (await call("/api/products/" + product.id)).json();
    assert.equal(current.stock, 5);
    assert.equal(current.version, 2);
    assert.equal((await (await call("/api/orders")).json()).length, 1);
  } finally {
    await new Promise((resolve) => server.close(resolve));
  }
});
