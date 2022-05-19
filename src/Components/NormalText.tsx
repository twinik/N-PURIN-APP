import { Text, StyleSheet, TextStyle } from "react-native";
import React from "react";
import { theme } from "../theme";
export default function NormalText({ children, style={} }) {
  return <Text style={{ ...styles.title, ...style }}>{children}</Text>;
}

const styles = StyleSheet.create({
  title: {
    color: theme.colors.secondary,
    fontSize: theme.sizes.twelve,
  },
});
