const mincostTickets = require("./index.js");

test("min cost tickets for 6 days", () => {
  expect(mincostTickets([1, 4, 6, 7, 8, 20], [2, 7, 15])).toBe(11);
});

test("min cost tickets for 6 days with non increasing ticket orders", () => {
  expect(mincostTickets([1, 4, 6, 7, 8, 20], [7, 2, 15])).toBe(6);
});

test("min cost tickets for travelling in a period of more than 30 days", () => {
  expect(
    mincostTickets([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 30, 31], [2, 7, 15])
  ).toBe(17);
});
