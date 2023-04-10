export interface ILogin {
    email: string;
    password: string;
    [key: string] : string
  }

export interface AuthProtocols{
    login: (params: ILogin) => Promise<string | Error>,
    register: (params: ILogin) => Promise<string | Error>
}