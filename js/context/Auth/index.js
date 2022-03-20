import React from "react";

const AuthContext = React.createContext(undefined);

function AuthProvider({ children, values }) {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  const values = {
    isLoggedIn,
    ...values,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

function useAuthContext() {
  return React.useContext(AuthContext);
}

export { AuthProvider, useAuthContext };
