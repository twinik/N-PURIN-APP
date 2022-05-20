import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../../Screens/Auth/Login";
import Register from "../../Screens/Auth/Register";
import Data0 from "../../Screens/Auth/Data/Data0";
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
      <AuthStack.Screen
        name="Data0"
        component={Data0}
        options={{ headerTitleAlign: "center", headerShown: false }}
      />
    </AuthStack.Navigator>
  );
}
