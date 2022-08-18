import { Text, StyleSheet, TextStyle } from "react-native";
import React from "react";
import { theme } from "../theme";
import { Button } from "react-native-paper";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

export default function button({ label, style = {}, onPress }) {
  return (
    <Button style={[style, styles.button]} mode="contained" onPress={onPress}>
      {label}
    </Button>
  );
}

const styles = StyleSheet.create({
  button: {
    width: wp(70),
    backgroundColor: theme.colors.green,
  },
});
