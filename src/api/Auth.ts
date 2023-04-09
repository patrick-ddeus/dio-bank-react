import { AuthProtocols, ILogin } from "./AuthProtocols";

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
          reject(new Error("User not found"));
        }
      }, 1200);
    }
  );
}

export default {
  login,
} as AuthProtocols;
