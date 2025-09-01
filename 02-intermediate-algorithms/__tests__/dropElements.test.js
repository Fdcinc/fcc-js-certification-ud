const dropElements = require('../dropElements');

describe('dropElements', () => {
  test('drops elements until the condition is true', () => {
    expect(dropElements([1, 2, 3, 4], n => n >= 3)).toEqual([3, 4]);
  });

  test('returns the whole array if first element passes', () => {
    expect(dropElements([3, 4, 5], n => n > 2)).toEqual([3, 4, 5]);
  });

  test('returns empty array if no elements pass', () => {
    expect(dropElements([1, 2, 3], n => n > 5)).toEqual([]);
  });

  test('handles empty array correctly', () => {
    expect(dropElements([], n => n > 0)).toEqual([]);
  });

  test('drops only first few elements until condition is met', () => {
    expect(dropElements([0, 1, 0, 1], n => n === 1)).toEqual([1, 0, 1]);
  });
});
