const calculator = require("./calculator");
const { default: TestRunner } = require("jest-runner");

test("calculator function", () => {
  expect(calculator(1, 3, "+")).toBe(4);
});
