import React, { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { theme } from "../../../theme";
import AppText from "../../../Components/AppText";
import Container from "../../../Components/Container";
import DataSection from "../../../Components/DataSection";

const Home = () => {
  return (
    <>
      <Container>
        <View style={styles.container}>
          <AppText
            text="Cantidad de Purin"
            style={styles.title}
            fontStyle="Regular"
          />
          <DataSection title="Produccion acumulada año 2022">
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

          <DataSection title="Produccion respecto al año anterior">
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

          <DataSection title="Aguas utilizadas en el ultimo mes">
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

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: hp(3),
  },
  title: {
    fontSize: hp(4),
    color: "gray",
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
