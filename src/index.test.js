const cerberus = require(".");

describe("cerberus", () => {
  test("`add` is exported", () => {
    expect(typeof cerberus.add).toBe("function");
  });

  test("`multiply` is exported", () => {
    expect(typeof cerberus.multiply).toBe("function");
  });
});
