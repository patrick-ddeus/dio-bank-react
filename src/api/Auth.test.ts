import Auth from "./Auth";

describe("Teste de função login", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("Deve retornar uma mensagem de bem vindo pro usuário logado", async () => {
    Auth.register({
      email: "fulano@teste.com",
      password: "123",
      fullName: "fulano",
    });

    await expect(
      Auth.login({ email: "fulano@teste.com", password: "123" })
    ).resolves.toBe("Bem Vindo fulano");
  });

  it("Deve retornar um erro ao tentar logar com uma conta não registrada", async () => {
    Auth.register({
      email: "fulano@teste3.com",
      password: "123",
      fullName: "fulano",
    });

    await expect(
      Auth.login({ email: "fulano@teste.com", password: "12345" })
    ).rejects.toThrow("Usuário ou Senha inválidos");
  });
});

describe("Teste de função register", () => {
  it("Deve retornar o nome do usuário cadastrado", async () => {
    await expect(
      Auth.register({
        email: "fulano2@teste.com",
        password: "123",
        fullName: "fulano",
      })
    ).resolves.toEqual({ fullName: "fulano" });
  });

  it("Deve retornar um erro de usuário já registrado", async () => {
    await expect(
      Auth.register({
        email: "fulano2@teste.com",
        password: "123",
        fullName: "fulano",
      })
    ).rejects.toThrow("Usuário já cadastrado!");
  });
});
