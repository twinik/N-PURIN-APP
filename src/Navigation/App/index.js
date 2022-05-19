import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../../Screens/App/Home";
export default function index() {
  const AppStack = createNativeStackNavigator();

  return (
    <AppStack.Navigator headerMode="none">
      <AppStack.Screen
        name="Home"
        component={Home}
        options={{ headerTitleAlign: "center", headerShown: false }}
      />
    </AppStack.Navigator>
  );
}
