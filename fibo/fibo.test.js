import fibs from "./fibo.js";

test("function exists", () => {
  expect(fibs()).not.toBe();
});

test("invalid inputs", () => {
  expect(fibs([1, 2])).toBe("error");
  expect(fibs({ a: "b" })).toBe("error");
  expect(fibs("a")).toBe("error");
  expect(fibs(null)).toBe("error");

  expect(fibs(0)).toBe("natural numbers only!");
  expect(fibs(-1)).toBe("natural numbers only!");
  expect(fibs(1.23)).toBe("natural numbers only!");
});
