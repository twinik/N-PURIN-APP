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
import DataSectionColumns from "../../Components/DataSectionColumns";
import DataListItem from "../../Components/DataListItem";
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
          <DataSectionColumns title={title1}>
            <View style={styles.section1}>
              <View style={styles.columns}>
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
              <View style={styles.columns}>
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
              <View style={styles.columns}>
                <AppText
                  text="DATA2"
                  style={styles.text1}
                  fontStyle="Regular"
                />
                <AppText
                  text="738,224 m3"
                  style={[styles.text2, { color: "blue" }]}
                  fontStyle="Regular"
                />
              </View>
            </View>
          </DataSectionColumns>
          <DataSectionColumns title={title2}>
            <View style={styles.section1}>
              <View style={styles.columns}>
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
              <View style={styles.columns}>
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
              <View style={styles.columns}>
                <AppText
                  text="DATA2"
                  style={styles.text1}
                  fontStyle="Regular"
                />
                <AppText
                  text="738,224 m3"
                  style={[styles.text2, { color: "blue" }]}
                  fontStyle="Regular"
                />
              </View>
            </View>
          </DataSectionColumns>
          <DataSection title={title3}>
            <View style={styles.section2}>
              <DataListItem title="DATA 1" data={"DATA 1"} />
              <DataListItem title="DATA 2" data={"DATA 2"} />
              <DataListItem title="DATA 3" data={"DATA 3"} />
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
    flexDirection: "row",
  },
  section2: {
    flex: 1,
    flexDirection: "column",
    paddingVertical: hp(0),
  },
  text1: {
    fontSize: hp(2.5),
  },
  text2: {
    fontSize: hp(2.5),
    color: "green",
  },
  columns: {
    flex: 1,
    alignItems: "center",
  },
});
