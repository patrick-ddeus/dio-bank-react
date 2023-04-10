import { AuthProtocols, ILogin } from "./Protocols/AuthProtocols";

const db: ILogin[] = [
  {
    email: "patrick@teste.com",
    password: "123456",
  },
];

function login({ email, password }: ILogin): Promise<string | Error> {
  return new Promise(
    (resolve: (value: string) => void, reject: (value: Error) => void) => {
      setTimeout(() => {
        const userInDb = db.find(
          (user) => user.email === email && user.password === password
        );

        if (userInDb) {
          resolve("Bem Vindo");
        } else {
          reject(new Error("Usuário ou Senha inválidos"));
        }
      }, 1200);
    }
  );
}

function register({ email, password }: ILogin): Promise<string | Error> {
  return new Promise((resolve: (value: string) => void, reject) => {
    setTimeout(() => {
      const userInDb = db.find(
        (user) => user.email === email && user.password === password
      );
      if (!userInDb) {
        db.push({ email, password });
        resolve("Usuário Cadastrado com sucesso!");
      } else {
        reject(new Error("Usuário já cadastrado!"));
      }
    }, 1200);
  });
}

export default {
  login,
  register,
} as AuthProtocols;
