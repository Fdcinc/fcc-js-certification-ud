const palindromeChecker = require('../palindromeChecker');

test('Detects palindromes', () => {
  expect(palindromeChecker("racecar")).toBe(true);
  expect(palindromeChecker("hello")).toBe(false);
});

