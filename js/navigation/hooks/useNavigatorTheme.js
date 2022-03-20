import { Appearance } from "react-native";

function useNavigatorTheme() {
  const colorScheme = Appearance.getColorScheme();
  const isDark = colorScheme === "dark";

  const navigatorTheme = {
    dark: isDark,
    colors: {
      primary: "white",
      background: "#53EFCE",
      card: "#1A2533",
      text: "#F5F5FA",
      border: "#97999E",
    },
  };

  return {
    navigatorTheme,
  };
}

export { useNavigatorTheme };
