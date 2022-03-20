import { registerRootComponent } from "expo";
import { AuthProvider } from "./js/context/Auth";
import RootNavigator from "./js/navigation/RootNavigator";

export default function App() {
  return (
    <AuthProvider>
      <RootNavigator />
    </AuthProvider>
  );
}

registerRootComponent(App);
