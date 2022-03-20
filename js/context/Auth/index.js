import React from "react";
import { useLogIn } from "./useLogIn";
import { useAuthCheck } from "./useAuthCheck";
import { useLogout } from "./useLogout";

const AuthContext = React.createContext(undefined);

function AuthProvider({ children, values }) {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const { handleGoogleSignIn } = useLogIn({ updateLoginState: setIsLoggedIn });
  const { handleAuthCheck } = useAuthCheck({ updateLoginState: setIsLoggedIn });
  const { handleLogout } = useLogout({ updateLoginState: setIsLoggedIn });

  const value = {
    // handlers
    handleGoogleSignIn,
    handleAuthCheck,
    handleLogout,

    // state
    isLoggedIn,
    ...values,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

function useAuthContext() {
  return React.useContext(AuthContext);
}

export { AuthProvider, useAuthContext };
