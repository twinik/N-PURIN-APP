import React, { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { theme } from "../../theme";
import AppText from "../../Components/AppText";
import Container from "../../Components/Container";
import DataSection from "../../Components/DataSection";
import MenuButton from "../../Components/MenuButton";

import { AntDesign, FontAwesome5, MaterialIcons } from "@expo/vector-icons";

const year = new Date().getFullYear();
const title1 = "Produccion anual";
const title2 = "Equivalente en carbono secuestrado";
const title3 = "Equivalente en emisiones evitadas";
const title4 = "Equivalente en emisiones de CO2";

const GEI = ({ navigation }) => {
  return (
    <>
      <Container>
        <View style={styles.container}>
          <MenuButton onPress={() => navigation.toggleDrawer()} />
          <AppText
            text="Estimación de GEI"
            style={styles.title}
            fontStyle="Regular"
          />
          <DataSection title={title1}>
            <View style={styles.section1}>
              <AppText
                text="Total Purin"
                style={styles.text1}
                fontStyle="Regular"
              />
              <AppText
                text="738,224 m3"
                style={[styles.text2, { color: "red" }]}
                fontStyle="Regular"
              />
            </View>
          </DataSection>
          <DataSection title={title2}>
            <View style={[styles.section1, { flexDirection: "row" }]}>
              <View style={styles.iconColumn}>
                <AntDesign name="heart" size={40} color="orange" />
              </View>
              <View style={styles.dataColumn}>
                <AppText
                  text="Total Purin"
                  style={styles.text1}
                  fontStyle="Regular"
                />
                <AppText
                  text="738,224 m3"
                  style={styles.text2}
                  fontStyle="Regular"
                />
              </View>
            </View>
          </DataSection>
          <DataSection title={title3}>
            <View style={[styles.section1, { flexDirection: "row" }]}>
              <View style={styles.iconColumn}>
                <FontAwesome5 name="trash" size={40} color="orange" />
              </View>
              <View style={styles.dataColumn}>
                <AppText
                  text="Total Purin"
                  style={styles.text1}
                  fontStyle="Regular"
                />
                <AppText
                  text="738,224 m3"
                  style={styles.text2}
                  fontStyle="Regular"
                />
              </View>
            </View>
          </DataSection>
          <DataSection title={title4}>
            <View style={[styles.section1, { flexDirection: "row" }]}>
              <View style={styles.iconColumn}>
                <MaterialIcons
                  name="local-gas-station"
                  size={40}
                  color="orange"
                />
              </View>
              <View style={styles.dataColumn}>
                <AppText
                  text="Total Purin"
                  style={styles.text1}
                  fontStyle="Regular"
                />
                <AppText
                  text="738,224 m3"
                  style={[styles.text2, { color: "red" }]}
                  fontStyle="Regular"
                />
              </View>
            </View>
          </DataSection>
        </View>
      </Container>
    </>
  );
};

export default GEI;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: hp(3),
  },
  title: {
    fontSize: hp(4),
    color: "white",
    marginVertical: hp(2),
  },
  section1: {
    backgroundColor: "lightgray",
    borderRadius: hp(1),
    height: hp(14),
    justifyContent: "center",
    alignItems: "center",
  },
  text1: {
    fontSize: hp(2.5),
  },
  text2: {
    fontSize: hp(2.5),
    color: "green",
  },
  iconColumn: {
    flex: 1.2,
    alignItems: "center",
    paddingRight: wp(0),
  },
  dataColumn: {
    flex: 2,
    alignItems: "flex-start",
    //backgroundColor: "blueviolet",
  },
});
