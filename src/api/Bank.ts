import BankProtocols from "./Protocols/BankProtocols";
import Account from "./Account";
import { ILogin } from "./Protocols/AuthProtocols";

class Bank implements BankProtocols {
  private accountNumber: number = 0;
  private accounts: Map<ILogin, Account>;

  constructor() {
    this.accounts = new Map<ILogin, Account>();
  }

  public createAccount = (initialBalance: number, credentials: ILogin) => {
    const account = new Account(initialBalance);
    const accountNumber = this.generateAccountNumber();
    this.accounts.set({ ...credentials, accountNumber }, account);

    return accountNumber;
  };

  public getAccount = (credentials: ILogin): Account | undefined => {
    return this.accounts.get(credentials);
  };

  public getCredentials = ({ email }: ILogin): ILogin | undefined => {
    const cedentialsArray = Array.from(this.accounts.keys());
    return cedentialsArray.find((user) => user.email === email);
  };

  public userExists = (credentials: ILogin): boolean => {
    const credentialsOnAccounts = Array.from(this.accounts.keys());
    return credentialsOnAccounts.some(
      (user) =>
        user.email === credentials.email &&
        user.password === credentials.password
    );
  };

  private generateAccountNumber(): string {
    const accountToString = this.accountNumber.toString().padStart(3, "0");
    this.accountNumber += 1;
    return accountToString;
  }
}
const instance = new Bank();

export default instance as Bank;
