import React from "react";

import { StatusBar, Button, Text, View } from "react-native";
import { useAuthContext } from "../../context/Auth";
import styles from "./styles";

function Login() {
  const { handleGoogleSignIn } = useAuthContext();
  return (
    <View style={styles.container}>
      <Text>Welcome, please login</Text>
      <Button title="Sign in with Google" onPress={handleGoogleSignIn} />
      <StatusBar style="auto" />
    </View>
  );
}

export default Login;
