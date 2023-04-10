import { AuthProtocols, ILogin } from "./Protocols/AuthProtocols";
import Bank from "./Bank";

function login(credentials: ILogin): Promise<string> {
  return new Promise(
    (resolve: (value: string) => void, reject: (value: Error) => void) => {
      setTimeout(() => {
        if (Bank.userExists(credentials)) {
          const user = Bank.getCredentials(credentials);
          resolve(`Bem Vindo ${user?.fullName}`);
        } else {
          reject(new Error("Usuário ou Senha inválidos"));
        }
      }, 1200);
    }
  );
}

function register({
  email,
  password,
  fullName,
}: ILogin): Promise<{ fullName: string } | Error> {
  return new Promise(
    (
      resolve: (value: { fullName: string }) => void,
      reject: (value: Error) => void
    ) => {
      setTimeout(() => {
        if (!Bank.userExists({ email, password })) {
          Bank.createAccount(0, { email, password, fullName });
          resolve({ fullName });
        } else {
          reject(new Error("Usuário já cadastrado!"));
        }
      }, 1200);
    }
  );
}

export default {
  login,
  register,
} as AuthProtocols;
