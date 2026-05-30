import merge from "./merge.js";

test("function exists", () => {
  expect(merge()).not.toBe();
});

test("invalid inputs", () => {
  expect(merge("a")).toBe("error");
  expect(merge(1)).toBe("error");
  expect(merge({ a: "b" })).toBe("error");
  expect(merge([])).toBe("error");
});
