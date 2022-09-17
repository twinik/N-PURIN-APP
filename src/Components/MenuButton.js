import { StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";

const MenuButton = ({ onPress }) => {
  return (
    <TouchableOpacity>
      <Icon name="bars" size={30} color="orange" onPress={onPress} />
    </TouchableOpacity>
  );
};

export default MenuButton;

const styles = StyleSheet.create({});
