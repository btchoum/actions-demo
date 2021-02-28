const { add, multiply } = require("./math");

test("it adds two numbers", () => {
  expect(add(1, 2)).toBe(3);
});

test("it can multiply", () => {
  expect(multiply(2, 3)).toBe(6);
});

test("it can subtract", () => {
  expect(subtract(5, 3)).toBe(2);
});
