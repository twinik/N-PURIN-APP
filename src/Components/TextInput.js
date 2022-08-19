import { StyleSheet, TextInput, Text } from "react-native";
import { useState } from "react";
import React from "react";
import { theme } from "../theme";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import AppText from "./AppText";

export default function textInput({ label, placeholder, ...props }) {
  const [value, setValue] = useState("");
  const handleChange = (text) => {
    setValue(text);
  };
  return (
    <>
      <AppText style={styles.label} text={label} fontStyle="Regular" />
      <TextInput
        style={styles.TextInput}
        label={label}
        placeholder={placeholder}
        placeholderTextColor={"lightgray"}
        value={value}
        onChangeText={handleChange}
        {...props}
      />
    </>
  );
}

const styles = StyleSheet.create({
  TextInput: {
    color: "#fff",
    fontSize: theme.sizes.fourteen,
    marginBottom: hp(1),
    borderBottomColor: theme.colors.secondary,
    borderBottomWidth: 1,
    paddingBottom: hp(0.5),
    height: hp(5),
  },
  label: {
    color: theme.colors.green,
    fontSize: theme.sizes.fifteen,
    marginTop: hp(2),
  },
});
