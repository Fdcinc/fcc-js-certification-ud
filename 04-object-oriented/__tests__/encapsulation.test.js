const BankAccount = require('../encapsulation');


describe('BankAccount Encapsulation', () => {
  let account;

  beforeEach(() => {
    account = new BankAccount('Nikolaos', 100);
  });

  test('initial balance is set and retrievable', () => {
    expect(account.getBalance()).toBe(100);
  });

  test('deposit increases balance', () => {
    account.deposit(50);
    expect(account.getBalance()).toBe(150);
  });

  test('withdraw decreases balance', () => {
    account.withdraw(30);
    expect(account.getBalance()).toBe(70);
  });

  test('throws error for overdraft', () => {
    expect(() => account.withdraw(200)).toThrow('Insufficient funds');
  });

  test('throws error for invalid deposit', () => {
    expect(() => account.deposit(0)).toThrow('Deposit must be positive');
  });

  test('cannot access private field directly', () => {
    expect(account.balance).toBeUndefined();  // should be undefined
  });
});
