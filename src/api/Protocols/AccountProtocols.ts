export default interface AccountProtocols{
    deposit(value: number): void,
    withdraw(value: number): void | Error,
    getBalance(): number,
}