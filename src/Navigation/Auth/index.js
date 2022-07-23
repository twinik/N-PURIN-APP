import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../../Screens/Auth/Login";
import Register from "../../Screens/Auth/Register";
import Data0 from "../../Screens/Auth/Data/Data0";
import Data1 from "../../Screens/Auth/Data/Data1";
import Data2 from "../../Screens/Auth/Data/Data2";
import Data3 from "../../Screens/Auth/Data/Data3";
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
      <AuthStack.Screen
        name="Data1"
        component={Data1}
        options={{ headerTitleAlign: "center", headerShown: false }}
      />
      <AuthStack.Screen
        name="Data2"
        component={Data2}
        options={{ headerTitleAlign: "center", headerShown: false }}
      />
      <AuthStack.Screen
        name="Data3"
        component={Data3}
        options={{ headerTitleAlign: "center", headerShown: false }}
      />
    </AuthStack.Navigator>
  );
}
