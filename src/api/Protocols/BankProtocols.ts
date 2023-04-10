import Account from "../Account";
import { ILogin } from "./AuthProtocols";

export default interface BankProtocols {
  createAccount: (initialBalance: number, credentials: ILogin) => string;
  getAccount: (credentials: ILogin) => Account | undefined;
  getCredentials: (email : ILogin) => ILogin | undefined;
  userExists: (credentials: ILogin) => boolean;
}
