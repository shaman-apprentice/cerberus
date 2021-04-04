const multiply = require("./multiply");

describe("multiply", () => {
  test("twice half the truth is the truth", () => {
    expect(multiply(2, 21)).toBe(42);
  });
});
