import React, { createContext } from "react";

interface AuthContextProps {
  isAuthenticated: boolean;
  loginContext: (
    token: string,
    fullname: string,
    accountNumber: string,
    balance: number
  ) => void;
  logoutContext: () => void;
}

interface AuthProvideProps {
  children: React.ReactNode;
}

export const AuthContext = createContext<AuthContextProps>({
  isAuthenticated: false,
  loginContext: () => {},
  logoutContext: () => {},
});

const initValue = localStorage.getItem("userInfo");

const AuthProvider: React.FC<AuthProvideProps> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = React.useState(
    initValue ? true : false
  );

  const loginContext = (
    token: string,
    fullname: string,
    accountNumber: string,
    balance: number
  ) => {
    setIsAuthenticated(true);
    localStorage.setItem(
      "userInfo",
      JSON.stringify({ token, fullname, accountNumber, balance })
    );
  };

  const logoutContext = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("userInfo");
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, loginContext, logoutContext }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
