import RootStack from "./src/Navigation/root.js";
import AppState from "./src/Context/AppState.js";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { NavigationContainer } from "@react-navigation/native";
import "react-native-gesture-handler";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AppState>
        <NavigationContainer>
          <RootStack />
        </NavigationContainer>
      </AppState>
    </QueryClientProvider>
  );
}
