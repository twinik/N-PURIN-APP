import RootStack from "./src/Navigation/root.js";
import AppState from "./src/Context/AppState.js";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <AppState>
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>
    </AppState>
  );
}


