const telephoneCheck = require('../telephoneCheck');

describe('telephoneCheck', () => {
  test('valid US formats', () => {
    expect(telephoneCheck("555-555-5555")).toBe(true);
    expect(telephoneCheck("1 555-555-5555")).toBe(true);
    expect(telephoneCheck("(555)555-5555")).toBe(true);
    expect(telephoneCheck("1 (555) 555-5555")).toBe(true);
  });

  test('invalid formats', () => {
    expect(telephoneCheck("123**&!!asdf#")).toBe(false);
    expect(telephoneCheck("5555555555")).toBe(true);
    expect(telephoneCheck("(6054756961)")).toBe(false);
    expect(telephoneCheck("2 (757) 622-7382")).toBe(false);
  });
});
