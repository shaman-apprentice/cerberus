const add = require("./add");

describe("add", () => {
  test("if you add half truth to half truth you get full truth", () => {
    expect(add(21, 21)).toBe(42);
  });
});
