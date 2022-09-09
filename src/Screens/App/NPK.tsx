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

const year = new Date().getFullYear();
const title1 = "Unidades / año";
const title2 = "Equivalente fertilizantes " + year;
const title3 = "Equivalente en pesos";

const NPK = ({ navigation }) => {
  return (
    <>
      <Container>
        <View style={styles.container}>
          <MenuButton onPress={() => navigation.toggleDrawer()} />
          <AppText
            text="Valorización NPK"
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
                style={styles.text2}
                fontStyle="Regular"
              />
            </View>
          </DataSection>
          <DataSection title={title2}>
            <View style={styles.section1}>
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
          </DataSection>
          <DataSection title={title3}>
            <View style={styles.section1}>
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
          </DataSection>
        </View>
      </Container>
    </>
  );
};

export default NPK;

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
    height: hp(18),
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
});
