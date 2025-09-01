function checkCashRegister(price, cash, cid) {
  const UNIT_AMOUNT = {
    "PENNY": 0.01,
    "NICKEL": 0.05,
    "DIME": 0.1,
    "QUARTER": 0.25,
    "ONE": 1,
    "FIVE": 5,
    "TEN": 10,
    "TWENTY": 20,
    "ONE HUNDRED": 100
  };

  let changeDue = cash - price;
  let totalCID = cid.reduce((sum, [, amount]) => sum + amount, 0);
  totalCID = Math.round(totalCID * 100) / 100;

  if (totalCID < changeDue) return { status: "INSUFFICIENT_FUNDS", change: [] };
  if (totalCID === changeDue) return { status: "CLOSED", change: cid };

  const change = [];
  cid = cid.reverse();

  for (const [unit, amount] of cid) {
    let unitTotal = 0;
    let value = UNIT_AMOUNT[unit];

    while (changeDue >= value && amount - unitTotal >= value) {
      unitTotal += value;
      changeDue -= value;
      changeDue = Math.round(changeDue * 100) / 100;
    }

    if (unitTotal > 0) {
      change.push([unit, unitTotal]);
    }
  }

  if (changeDue > 0) return { status: "INSUFFICIENT_FUNDS", change: [] };

  return { status: "OPEN", change };
}

module.exports = checkCashRegister;
