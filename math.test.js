const { sum } = require("./math");

console.log(sum);

test("it adds two numbers", function () {
  expect(sum(1, 2)).toBe(3);
});
