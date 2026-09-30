module.exports = {
  ...{
    resource: "products",
    invalid: {},
    shared: true,
    adminOnly: true,
    patch: { stock: 8 },
  },
  body: async (url, cookie) => {
    return {
      sku: "TEST-001",
      name: "Test product",
      priceCents: 1500,
      stock: 12,
    };
  },
};
