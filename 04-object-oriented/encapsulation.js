class BankAccount {
  #balance; // private field

  constructor(owner, initialBalance = 0) {
    this.owner = owner;
    this.#balance = initialBalance;
  }

  deposit(amount) {
    if (amount <= 0) throw new Error('Deposit must be positive');
    this.#balance += amount;
  }

  withdraw(amount) {
    if (amount > this.#balance) throw new Error('Insufficient funds');
    this.#balance -= amount;
  }

  getBalance() {
    return this.#balance;
  }
}

module.exports = BankAccount;
