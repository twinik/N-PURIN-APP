import { StyleSheet, View } from "react-native";
import React from "react";
import AppText from "./AppText";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

const DataSection = ({ title, children }) => {
  return (
    <View style={styles.container}>
      <View style={styles.containerText}>
        <AppText text={title} style={styles.title} fontStyle="Regular" />
      </View>
      {children}
    </View>
  );
};

export default DataSection;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerText: {
    alignItems: "flex-end",
    borderBottomColor: "gray",
    borderBottomWidth: 3,
    marginBottom: hp(1),
  },
  title: {
    fontSize: hp(2.5),
    color: "white",
  },
});
