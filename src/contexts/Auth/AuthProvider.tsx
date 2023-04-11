import React, { createContext } from "react";

interface AuthContextProps {
  isAuthenticated: boolean;
  loginContext: () => void;
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

const AuthProvider: React.FC<AuthProvideProps> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);

  const loginContext = () => {
    setIsAuthenticated(true);
  };

  const logoutContext = () => {
    setIsAuthenticated(false);
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
