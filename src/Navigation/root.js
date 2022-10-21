import React, { useContext, useEffect, useState } from "react";
import AppContext from "../Context/AppContext";
import AuthStack from "./Auth";
import AppStack from "./App";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Text } from "react-native-paper";

export default function Root() {
  const GeneralStack = createNativeStackNavigator();

  return (
    <GeneralStack.Navigator>
      <GeneralStack.Screen
        name="Auth"
        component={AuthStack}
        options={{ headerShown: false }}
      />
      <GeneralStack.Screen
        name="App"
        component={AppStack}
        options={{ headerShown: false }}
      />
    </GeneralStack.Navigator>
  );
}
