import React from "react";
import { SafeAreaView, StyleSheet, StatusBar, Platform } from "react-native";
import { theme } from "../../theme";
export default function index({ children, style = {} }) {
  return (
    <SafeAreaView
      style={{
        ...styles.container,
        ...style,
      }}
    >
      {children}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: theme.colors.blue,
  },
});
