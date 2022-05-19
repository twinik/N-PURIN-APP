import { Text, StyleSheet, TextStyle } from "react-native";
import React from "react";
import { theme } from "../theme";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import PropTypes from "prop-types";
export default function Title({ children, style }) {
  return <Text style={{ ...styles.title, ...style }}>{children}</Text>;
}

const styles = StyleSheet.create({
  title: {
    color: theme.colors.black,
    fontWeight: "bold",
    fontSize: theme.sizes.twenty,
    textTransform: "uppercase",
    marginBottom:hp(1)
  },
});



