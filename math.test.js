const { sum } = require("./math");

test("it adds two numbers", function () {
  expect(sum(1, 2)).toBe(3);
});
