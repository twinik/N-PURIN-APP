import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../../Screens/Auth/Login";
import Register from "../../Screens/Auth/Register";
export default function index() {
  const AuthStack = createNativeStackNavigator();

  return (
    <AuthStack.Navigator headerMode="none" initialRouteName="Login">
      <AuthStack.Screen
        name="Login"
        component={Login}
        options={{ headerTitleAlign: "center", headerShown: false }}
      />
      <AuthStack.Screen
        name="Register"
        component={Register}
        options={{ headerTitleAlign: "center", headerShown: false }}
      />
    </AuthStack.Navigator>
  );
}
