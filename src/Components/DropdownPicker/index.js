import React, { useState } from "react";
import DropDownPicker from "react-native-dropdown-picker";
import { StyleSheet } from "react-native";
export default function index({
  initial,
  items,
  zIndex,
  zIndexInverse,
  placeholder,
  setFieldValue,
  name,
}) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(initial);
  return (
    <DropDownPicker
      zIndex={zIndex}
      zIndexInverse={zIndexInverse}
      style={styles.dropDown}
      items={items}
      open={open}
      value={Math.floor(value)}
      setOpen={setOpen}
      setValue={(value) => {
        setValue(value);
      }}
      onChangeValue={(value) => {
        setFieldValue(name, value);
      }}
      placeholder={placeholder}
      placeholderStyle={{
        color: "black",
        textAlign: "center",
      }}
    />
  );
}

const styles = StyleSheet.create({
  dropDown: {
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});
