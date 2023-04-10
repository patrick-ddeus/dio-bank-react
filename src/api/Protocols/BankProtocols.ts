import Account from "../Account"

export default interface BankProtocols{
    createAccount: (initialBalance: number) => string,
    getAccount: (accountNumber: string) => Account | undefined,
}