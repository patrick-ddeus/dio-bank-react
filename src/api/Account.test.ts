import Account from "./Account";

describe("Account Class Testings", () => {
  it("Deve retornar 150", () => {
    const account = new Account(100);
    account.deposit(50);
    expect(account.getBalance()).toBe(150);
  });

  it("Deve retornar 50", () => {
    const account = new Account(100);
    account.withdraw(50);
    expect(account.getBalance()).toBe(50);
  });

  it("Deve retornar um erro de saldo insuficiente", () => {
    const account = new Account(100);
    expect(() => account.withdraw(200)).toThrow("Insufficient balance");
  });
});
