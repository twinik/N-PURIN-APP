import { StyleSheet, TextInput, Text } from "react-native";
import { useState } from "react";
import React from "react";
import { theme } from "../theme";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";

export default function textInput({ label, placeholder }) {
  const [value, setValue] = useState("");
  const handleChange = (text) => {
    setValue(text);
  };
  return (
    <>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.TextInput}
        label={label}
        placeholder={placeholder}
        value={value}
        onChangeText={handleChange}
      />
    </>
  );
}

const styles = StyleSheet.create({
  TextInput: {
    color: theme.colors.black,
    fontSize: theme.sizes.fourteen,
    marginBottom: hp(1),
    borderBottomColor: theme.colors.secondary,
    borderBottomWidth: 1,
    paddingBottom: hp(.5),
  },
  label: {
    color: theme.colors.primary,
    fontWeight: "bold",
    fontSize: theme.sizes.fourteen,
    marginTop: hp(2),
  },
});
