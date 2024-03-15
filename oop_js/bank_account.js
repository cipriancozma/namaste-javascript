class BankAccount {
  constructor(balance = 0, accountHolder, accountNumber) {
    this.balance = balance;
    this.accountHolder = accountHolder;
    this.accountNumber = accountNumber;
  }

  deposit(amt) {
    if (amt > 0) {
      this.balance += amt;
      return `You added $${amt}. Your new balance is $${this.balance}`;
    }
  }

  withdraw(amt) {
    if (amt < this.balance) {
      this.balance -= amt;
      return `You widthdrew $${amt}. Your new balance is $${this.balance}`;
    } else {
      return `Your balance has to be greater than your amount.`;
    }
  }

  balance() {
    return `Your balance is $${this.balance}`;
  }
}

const myAccount = new BankAccount(200, "CC", "CC090909");

console.log(myAccount);
