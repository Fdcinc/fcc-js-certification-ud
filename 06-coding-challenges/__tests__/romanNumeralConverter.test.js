const convertToRoman = require('../romanNumeralConverter');

describe('convertToRoman', () => {
  test('converts 2 to II', () => {
    expect(convertToRoman(2)).toBe("II");
  });

  test('converts 4 to IV', () => {
    expect(convertToRoman(4)).toBe("IV");
  });

  test('converts 9 to IX', () => {
    expect(convertToRoman(9)).toBe("IX");
  });

  test('converts 36 to XXXVI', () => {
    expect(convertToRoman(36)).toBe("XXXVI");
  });

  test('converts 3999 to MMMCMXCIX', () => {
    expect(convertToRoman(3999)).toBe("MMMCMXCIX");
  });
});
