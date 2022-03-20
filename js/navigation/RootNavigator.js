import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { useAuthContext } from "../context/Auth";
import Login from "../screens/Login";
import Profile from "../screens/Profile";
import { useNavigatorTheme } from "./hooks/useNavigatorTheme";

const Stack = createStackNavigator();

function RootNavigator() {
  const { isLoggedIn, handleAuthCheck } = useAuthContext();
  const { navigatorTheme } = useNavigatorTheme();

  React.useEffect(() => {
    async function init() {
      await handleAuthCheck();
    }
    init();
  }, []);

  return (
    <NavigationContainer theme={navigatorTheme}>
      <Stack.Navigator
        screenOptions={{ animationEnabled: false, headerShown: false }}
      >
        {!isLoggedIn && <Stack.Screen name="Login" component={Login} />}
        {isLoggedIn && <Stack.Screen name="Profile" component={Profile} />}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RootNavigator;
