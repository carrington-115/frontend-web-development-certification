const addFunction = require(`./index`);
const { default: TestRunner } = require("jest-runner");

test(`Add 2 numbers`, () => {
  expect(addFunction("1", "2")).toBe(3);
});
