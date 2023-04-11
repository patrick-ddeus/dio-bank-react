import AccountProtocols from "./Protocols/AccountProtocols";

class Account implements AccountProtocols {
    private balance: number;

    public constructor(balance: number){
        this.balance = balance
    }

    public deposit = (value: number): void => {
        this.balance += value
    }  

    public withdraw(value: number): void | Error {
        if(value > this.balance) {
            throw new Error("Insufficient balance");
        }
        this.balance -= value
    }

    public getBalance(): number {
        return this.balance
    }
}

export default Account