import RootStack from "./src/Navigation/root.js";
import AppState from "./src/Context/AppState.js";
import { NavigationContainer } from "@react-navigation/native";
import "react-native-gesture-handler";

export default function App() {
  return (
    <AppState>
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>
    </AppState>
  );
}
