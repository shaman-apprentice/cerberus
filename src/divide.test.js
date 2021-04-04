const divide = require("./divide");

describe("divide", () => {
  test("truth divided by 2 is only half the truth", () => {
    expect(divide(42, 2)).toBe(21);
  });
});
