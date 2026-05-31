import merge from "./merge.js";

test("function exists", () => {
  expect(merge()).not.toBe();
});

test("invalid inputs", () => {
  expect(merge("a")).toBe("error");
  expect(merge(1)).toBe("error");
  expect(merge({ a: "b" })).toBe("error");
});

test("valid inputs", () => {
  expect(merge([])).toEqual([]);
  expect(merge([1])).toEqual([1]);
  expect(merge([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
  expect(merge([3, 2, 1, 13, 8, 5, 0, 1])).toEqual([0, 1, 1, 2, 3, 5, 8, 13]);
  expect(merge([105, 79, 100, 110])).toEqual([79, 100, 105, 110]);
});
