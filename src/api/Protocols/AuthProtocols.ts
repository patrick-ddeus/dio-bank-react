export interface ILogin {
  email: string;
  password: string;
  [key: string]: string;
  accountNumber?: any;
  fullname?: any;
}

export interface IRegister{
  email: string;
  password: string;
  fullname: string;
}

export interface AuthProtocols {
  login: (params: ILogin) => Promise<string | Error>;
  register: (params: ILogin) => Promise<{ fullName: string } | Error>;
}
