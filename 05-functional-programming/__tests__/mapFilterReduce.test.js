const { numbers, doubled, evens, sum } = require('../mapFilterReduce');

test('map doubles numbers', () => {
  expect(doubled).toEqual([2, 4, 6, 8, 10]);
});

test('filter selects evens', () => {
  expect(evens).toEqual([2, 4]);
});

test('reduce sums values', () => {
  expect(sum).toBe(15);
});
