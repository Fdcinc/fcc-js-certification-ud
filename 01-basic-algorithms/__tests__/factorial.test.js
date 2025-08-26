const factorial = require('../factorial');

test('Calculates factorial of 5', () => {
  expect(factorial(5)).toBe(120);
});
