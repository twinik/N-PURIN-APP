import { StyleSheet, TextInput, Text, View } from "react-native";
import { useState } from "react";
import React from "react";
import { theme } from "../theme";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { Feather } from "@expo/vector-icons";
import AppText from "./AppText";
export default function textInput({ label, placeholder, ...props }) {
  const [value, setValue] = useState("");
  const [visibility, setVisibility] = useState(false);
  const handleChange = (text) => {
    setValue(text);
  };
  return (
    <>
      <AppText style={styles.label} text={label} fontStyle="Regular" />
      <View style={styles.row}>
        <TextInput
          style={styles.TextInput}
          label={label}
          placeholder={placeholder}
          value={value}
          onChangeText={handleChange}
          secureTextEntry={!visibility}
          {...props}
        />
        {!visibility ? (
          <Feather
            name="eye"
            size={20}
            color="black"
            style={styles.icon}
            onPress={() => setVisibility(!visibility)}
          />
        ) : (
          <Feather
            name="eye-off"
            size={20}
            color="black"
            style={styles.icon}
            onPress={() => setVisibility(!visibility)}
          />
        )}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  TextInput: {
    color: theme.colors.black,
    fontSize: theme.sizes.fourteen,
  },
  label: {
    color: theme.colors.primary,
    fontSize: theme.sizes.fourteen,
    marginTop: hp(2),
  },
  row: {
    flexDirection: "row",
    marginBottom: hp(1),
    borderBottomColor: theme.colors.secondary,
    borderBottomWidth: 1,
    paddingBottom: hp(0.5),
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    maxWidth: wp(80),
  },
});
