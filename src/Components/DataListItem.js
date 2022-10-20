import { StyleSheet, View } from "react-native";
import React from "react";
import AppText from "./AppText";
import { Ionicons, FontAwesome5 } from "@expo/vector-icons";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

const DataListItem = ({ title, data }) => {
  return (
    <View style={styles.container}>
      <View style={{ flex: 1, alignItems: "center" }}>
        {title == "Aguas sucias" ? (
          <Ionicons name="water" size={24} color={"white"} />
        ) : (
          <FontAwesome5 name="water" size={24} color="white" />
        )}
      </View>
      <View style={{ flex: 5 }}>
        <AppText text={title} style={styles.title} />
      </View>
      <View style={{ flex: 4 }}>
        <AppText text={data + " L"} style={styles.data} />
      </View>
    </View>
  );
};

export default DataListItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    padding: 10,
    borderTopColor: "gray",
    borderTopWidth: 1.5,
  },
  title: {
    color: "#fff",
    fontSize: hp(2.5),
    textAlign: "left",
    marginLeft: wp(5),
  },
  data: {
    color: "lightgray",
    fontSize: hp(2.5),
    textAlign: "center",
  },
});
