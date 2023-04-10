import BankProtocols from "./Protocols/BankProtocols";
import Account from "./Account";

class Bank implements BankProtocols {
  private accountNumber: number = 0;
  private accounts: Map<string, Account>;

  constructor() {
    this.accounts = new Map<string, Account>();
  }

  public createAccount = (initialBalance: number) => {
    const account = new Account(initialBalance);
    const accountNumber = this.generateAccountNumber();
    this.accounts.set(accountNumber, account);

    return accountNumber;
  };

  public getAccount = (accountNumber: string): Account | undefined => {
    return this.accounts.get(accountNumber);
  };

  private generateAccountNumber(): string {
    const accountToString = this.accountNumber.toString().padStart(3, "0");
    this.accountNumber += 1;
    return accountToString;
  }
}

const bank = new Bank();
