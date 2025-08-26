'use strict';
const reverseString = require('../reverseString');

test('Reverses a simple string', () => {
  expect(reverseString("hello")).toBe("olleh");
});
