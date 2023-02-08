import React, { useContext, useEffect } from "react";
import { StyleSheet, View, ActivityIndicator } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { theme } from "../../../theme";
import AppContext from "../../../Context/AppContext";
import AppText from "../../../Components/AppText";
import Container from "../../../Components/Container";
import DataSection from "../../../Components/DataSection";
import DataListItem from "../../../Components/DataListItem";
import MenuButton from "../../../Components/MenuButton";
import { useQuery } from "@tanstack/react-query";
import {
  Estiercol,
  AguasSucias,
  AguasLimpias,
  Ubi_Estacion,
  AguasLluvia,
} from "../../../Services/appdata";

const year = new Date().getFullYear();
const title1 = "Produccion acumulada año " + year;
const title2 = "Aguas caidas acumuladas año " + year;
const title3 = "Aguas acumuladas año " + year;

const Home = ({ navigation }) => {
  const { User_ID } = useContext(AppContext);

  const estiercolQuery = useQuery(["Estiercol"], () => Estiercol(User_ID));
  const aguasSuciasQuery = useQuery(["AguasSucias"], () =>
    AguasSucias(User_ID)
  );
  const aguasLimpiasQuery = useQuery(["AguasLimpias"], () =>
    AguasLimpias(User_ID)
  );
  const ubiEstacionQuery = useQuery(["Ubi_Estacion"], () =>
    Ubi_Estacion(User_ID)
  );
  const aguasLluviaQuery = useQuery(["AguasLLuvia"], () =>
    AguasLluvia(User_ID, ubiEstacionQuery.data.id_ubicacion)
  );

  if (aguasLluviaQuery.isLoading) {
    return (
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#072e45",
        }}
      >
        <ActivityIndicator style={{ flex: 1 }} color="#fff" />
      </View>
    );
  }

  if (aguasLluviaQuery.isError) {
    return (
      <AppText
        text={"Error"}
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
        fontStyle
      />
    );
  }

  function CalculoTotalPurin(
    estiercol,
    aguasSucias,
    aguasLimpias,
    aguasLluvia
  ) {
    let TotalPurin =
      estiercol.data + aguasSucias.data + aguasLimpias.data + aguasLluvia.data;
    return TotalPurin;
  }

  return (
    <>
      <Container>
        <View style={styles.container}>
          <MenuButton onPress={() => navigation.toggleDrawer()} />
          <AppText
            text="Cantidad de Purin"
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
                text={
                  Math.trunc(
                    CalculoTotalPurin(
                      estiercolQuery,
                      aguasSuciasQuery,
                      aguasLimpiasQuery,
                      aguasLluviaQuery
                    )
                  ) + " m3"
                }
                style={styles.text2}
                fontStyle="Regular"
              />
            </View>
          </DataSection>
          <DataSection title={title2}>
            <View style={styles.section1}>
              <AppText
                text={"Ene " + year + " a la fecha"}
                style={styles.text1}
                fontStyle="Regular"
              />
              <AppText
                text={aguasLluviaQuery.data + " mm"}
                style={styles.text2}
                fontStyle="Regular"
              />
            </View>
          </DataSection>
          <DataSection title={title3}>
            <View style={styles.section2}>
              <DataListItem
                title="Aguas sucias"
                data={Math.trunc(aguasSuciasQuery.data) + " L"}
              />
              <DataListItem
                title="Aguas limpias"
                data={Math.trunc(aguasLimpiasQuery.data) + " L"}
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
    color: "white",
    marginVertical: hp(2),
  },
  section1: {
    backgroundColor: "lightgray",
    borderRadius: 10,
    height: "75%",
    justifyContent: "center",
    alignItems: "center",
  },
  section2: {
    flex: 1,
    flexDirection: "column",
    paddingVertical: hp(3),
  },
  text1: {
    fontSize: hp(2.5),
  },
  text2: {
    fontSize: hp(2.5),
    color: "green",
  },
});
