import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "../../Screens/App/Home";
import Purin from "../../Screens/App/Home";
import NPK from "../../Screens/App/NPK";
import GEI from "../../Screens/App/GEI";
import DrawerDesign from "../../Components/DrawerDesign";
import { AntDesign, Ionicons, FontAwesome, Entypo } from "@expo/vector-icons";
import { theme } from "../../theme";
import AppText from "../../Components/AppText";
import { View, StyleSheet } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

function setColor(focused) {
  return focused ? "orange" : "lightgray";
}

export default function index() {
  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator
      drawerContent={(props) => <DrawerDesign {...props} />}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Drawer.Screen
        name="Purin"
        component={Purin}
        options={{
          title: "Cantidad Purín",
          gestureEnabled: true,
          gestureDirection: "horizontal",
          drawerActiveTintColor: "orange",
          drawerInactiveTintColor: "lightgray",
          drawerIcon: ({ focused, size }) => (
            <Ionicons
              name="stats-chart"
              size={size}
              color={setColor(focused)}
            />
          ),
        }}
      />

      <Drawer.Screen
        name="NPK"
        component={NPK}
        options={{
          title: "Valorización NPK",
          gestureEnabled: true,
          gestureDirection: "horizontal",
          drawerActiveTintColor: "orange",
          drawerInactiveTintColor: "lightgray",
          drawerIcon: ({ focused, size }) => (
            <FontAwesome name="dollar" size={size} color={setColor(focused)} />
          ),
        }}
      />

      <Drawer.Screen
        name="Gei"
        component={GEI}
        options={{
          title: "Estimación GEI",
          gestureEnabled: true,
          gestureDirection: "horizontal",
          drawerActiveTintColor: "orange",
          drawerInactiveTintColor: "lightgray",
          drawerIcon: ({ focused, size }) => (
            <Entypo name="leaf" size={size} color={setColor(focused)} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}
