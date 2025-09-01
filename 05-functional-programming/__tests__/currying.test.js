const { multiply, multiplyBy2, multiplyBy3 } = require('../currying');

test('multiply returns curried function', () => {
  expect(multiply(4)(5)).toBe(20);
});

test('multiplyBy2 works correctly', () => {
  expect(multiplyBy2(6)).toBe(12);
});

test('multiplyBy3 works correctly', () => {
  expect(multiplyBy3(3)).toBe(9);
});
