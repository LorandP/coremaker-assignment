import React from "react";
import { removeAccessToken } from "../../services";

function useLogout({ updateLoginState }) {
  const handleLogout = React.useCallback(async () => {
    const result = await removeAccessToken();
    if (result) {
      updateLoginState(false);
    }
  }, [updateLoginState]);

  return {
    handleLogout,
  };
}

export { useLogout };
