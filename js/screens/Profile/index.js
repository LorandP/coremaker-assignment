import React from 'react';
import { StatusBar } from "expo-status-bar";
import { Button, Text, View } from "react-native";
import { useAuthContext } from "../../context/Auth";
import styles from "./styles";

function Profile() {
  const { handleLogout } = useAuthContext();

  return (
    <View style={styles.container}>
      <Text>Hello, welcome to your profile!</Text>
      <Button title="Log out" onPress={handleLogout} />
      <StatusBar style="auto" />
    </View>
  );
}

export default Profile;
