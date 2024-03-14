function createAccount(pinCode, initialDeposit) {
  let PIN = pinCode;
  let currentBalance = initialDeposit;
  return {
    checkBalance: function (introducedPIN) {
      if (introducedPIN === PIN) {
        return currentBalance;
      } else {
        return "Invalid PIN.";
      }
    },
    deposit: function (introducedPIN, amount) {
      if (introducedPIN === PIN) {
        currentBalance += amount;
        return `Successfully deposited $${amount}. Current balance: $${currentBalance}.`;
      } else {
        return "Invalid PIN.";
      }
    },
    withdraw: function (introducedPIN, amount) {
      if (introducedPIN === PIN) {
        if (amount <= currentBalance) {
          currentBalance -= amount;
          return `Successfully withdrew $${amount}. Current balance: $${currentBalance}.`;
        } else {
          return `Withdrawal amount exceeds account balance. Transaction cancelled.`;
        }
      } else {
        return "Invalid PIN.";
      }
    },
    changePin: function (oldPIN, newPIN) {
      if (oldPIN !== PIN) {
        return "Invalid PIN.";
      } else {
        PIN = newPIN;
        return "PIN successfully changed!";
      }
    },
  };
}

let account = createAccount("1234", 100);

console.log(account);
