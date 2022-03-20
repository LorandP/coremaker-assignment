import React from "react";
import { getSavedAccessToken } from "../../services";

function useAuthCheck({ updateLoginState }) {
  const handleAuthCheck = React.useCallback(async () => {
    const accessToken = await getSavedAccessToken();
    updateLoginState(!!accessToken);
  }, [updateLoginState]);
  return {
    handleAuthCheck,
  };
}
export { useAuthCheck };
