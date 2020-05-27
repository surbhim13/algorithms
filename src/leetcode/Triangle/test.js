const minimumTotal = require("./index.js");

test("min path for 4 layer triangle", () => {
  expect(minimumTotal([[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]])).toBe(11);
});
