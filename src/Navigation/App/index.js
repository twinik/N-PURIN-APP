import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "../../Screens/App/Home";
export default function index() {
  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{ headerTitleAlign: "center", headerShown: false }}
      />
    </Drawer.Navigator>
  );
}
