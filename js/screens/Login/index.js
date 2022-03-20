import React from "react";
import { StatusBar, Text, View } from "react-native";
import styles from "./styles";

function Login() {
  return (
    <View style={styles.container}>
      <Text>Welcome, please login</Text>
      <StatusBar style="auto" />
    </View>
  );
}

export default Login;
