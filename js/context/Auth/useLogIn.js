import React from "react";
import { EXPO_CLIENT_ID, IOS_CLIENT_ID, ANDROID_CLIENT_ID } from "../../config";
import { useAuthRequest } from "expo-auth-session/providers/google";
import { saveAccessToken } from "../../services";

function useLogIn({ updateLoginState }) {
  const config = {
    expoClientId: EXPO_CLIENT_ID,
    iosClientId: IOS_CLIENT_ID,
    androidClientId: ANDROID_CLIENT_ID,
  };
  const [, response, promptAsync] = useAuthRequest(config);

  React.useEffect(() => {
    if (response?.type === "success") {
      updateLoginState(true);
      async function saveToken() {
        await saveAccessToken(response.authentication.accessToken);
      }
      saveToken();
    }
  }, [response]);

  const handleGoogleSignIn = React.useCallback(async () => {
    try {
      await promptAsync();
    } catch (error) {
      console.error(error);
    }
  }, [promptAsync]);

  return {
    handleGoogleSignIn,
  };
}

export { useLogIn };
