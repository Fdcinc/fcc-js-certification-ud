const checkCashRegister = require('../cashRegister');

describe('checkCashRegister', () => {
  const drawer = [
    ["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25],
    ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]
  ];

  test('returns correct change', () => {
    expect(checkCashRegister(19.5, 20, drawer).status).toBe("OPEN");
  });

  test('returns insufficient funds', () => {
    const shortDrawer = [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0],
                         ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]];
    expect(checkCashRegister(19.5, 20, shortDrawer)).toEqual({
      status: "INSUFFICIENT_FUNDS",
      change: []
    });
  });

  test('returns closed when exact change equals total in drawer', () => {
    const exactDrawer = [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0],
                         ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]];
    expect(checkCashRegister(19.5, 20, exactDrawer)).toEqual({
      status: "CLOSED",
      change: exactDrawer
    });
  });
});
