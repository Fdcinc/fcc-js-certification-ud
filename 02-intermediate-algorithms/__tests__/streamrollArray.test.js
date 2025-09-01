const steamrollArray = require('../streamrollArray');

describe('steamrollArray', () => {
  test('flattens a deeply nested array', () => {
    expect(steamrollArray([1, [2], [3, [[4]]]])).toEqual([1, 2, 3, 4]);
  });

  test('returns empty array when given empty array', () => {
    expect(steamrollArray([])).toEqual([]);
  });

  test('handles nested empty arrays', () => {
    expect(steamrollArray([[], [[]], [[[]]]])).toEqual([]);
  });

  test('preserves mixed types', () => {
    expect(steamrollArray([1, ['a', [true]], [null]])).toEqual([1, 'a', true, null]);
  });

  test('handles array of objects and numbers', () => {
    expect(steamrollArray([1, {}, [3, [[4]]]])).toEqual([1, {}, 3, 4]);
  });
});
