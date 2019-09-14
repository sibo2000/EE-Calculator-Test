import calculate from "./calculate";

test("the array [1] + [1] to return Number 2", () => {
  expect(calculate([1], "+", [1])).toBe(2);
});

test("the array [1,0] + [1,0] to return Number 20", () => {
  expect(calculate([1, 0], "+", [1, 0])).toBe(20);
});

test("the array [7] - [5] to return Number 2", () => {
  expect(calculate([7], "-", [5])).toBe(2);
});

test("the array [1,0,0] - [1,0] to return Number 20", () => {
  expect(calculate([1, 0, 0], "-", [1, 0])).toBe(90);
});

test("the array [5] * [5] to return Number 2", () => {
  expect(calculate([5], "x", [5])).toBe(25);
});

test("the array [8,] / [2] to return Number 20", () => {
  expect(calculate([8], "/", [2])).toBe(4);
});
