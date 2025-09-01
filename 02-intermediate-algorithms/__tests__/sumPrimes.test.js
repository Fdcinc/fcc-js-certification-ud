const sumPrimes = require('../sumPrimes');

describe('sumPrimes', () => {
  test('returns the sum of all primes up to 10', () => {
    // Primes: 2, 3, 5, 7 => sum = 17
    expect(sumPrimes(10)).toBe(17);
  });

  test('returns 0 for numbers less than 2', () => {
    expect(sumPrimes(1)).toBe(0);
    expect(sumPrimes(0)).toBe(0);
    expect(sumPrimes(-5)).toBe(0);
  });

  test('returns 2 for input 2', () => {
    expect(sumPrimes(2)).toBe(2);
  });

  test('correctly calculates for 20', () => {
    // Primes: 2, 3, 5, 7, 11, 13, 17, 19 => sum = 77
    expect(sumPrimes(20)).toBe(77);
  });

  test('correctly calculates for 30', () => {
    expect(sumPrimes(30)).toBe(129);
  });
});
