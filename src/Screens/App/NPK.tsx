import React, { useContext } from "react";
import { StyleSheet, View } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import AppContext from "../../Context/AppContext";
import AppText from "../../Components/AppText";
import Container from "../../Components/Container";
import DataSection from "../../Components/DataSection";
import DataSectionColumns from "../../Components/DataSectionColumns";
import DataListItem from "../../Components/DataListItem";
import MenuButton from "../../Components/MenuButton";
import { useQuery } from "@tanstack/react-query";
import {
  Estiercol,
  AguasSucias,
  AguasLimpias,
  AguasLluvia,
  Ubi_Estacion,
  Nitrogeno,
  Urea,
  Fosforo,
  SPT,
  Potasio,
  KCL,
  ValorKcl,
  ValorUrea,
  ValorSpt,
} from "../../Services/appdata";

const year = new Date().getFullYear();
const title1 = "Unidades / año";
const title2 = "Equivalente fertilizantes " + year;
const title3 = "Equivalente en pesos";

const NPK = ({ navigation }) => {
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

  var cantidadPurin = CalculoTotalPurin(
    estiercolQuery,
    aguasSuciasQuery,
    aguasLimpiasQuery,
    aguasLluviaQuery
  );

  function addZeroBefore(n: number) {
    return (n < 10 ? "0" : "") + n;
  }

  const date = new Date();
  const dateFormated =
    date.getFullYear() +
    "-" +
    addZeroBefore(date.getMonth() + 1) +
    "-" +
    addZeroBefore(date.getDate());

  const nitrogenoQuery = useQuery(["Nitrogeno"], () =>
    Nitrogeno(cantidadPurin)
  );
  const ureaQuery = useQuery(["Urea"], () => Urea(cantidadPurin));
  const fosforoQuery = useQuery(["Fosforo"], () => Fosforo(cantidadPurin));
  const sptQuery = useQuery(["SPT"], () => SPT(cantidadPurin));
  const potasioQuery = useQuery(["Potasio"], () => Potasio(cantidadPurin));
  const kclQuery = useQuery(["KCL"], () => KCL(cantidadPurin));
  const valorUreaQuery = useQuery(["ValorUrea"], () =>
    ValorUrea(dateFormated, ureaQuery.data)
  );
  const valorSptQuery = useQuery(["ValorSpt"], () =>
    ValorSpt(dateFormated, sptQuery.data)
  );
  const valorKclQuery = useQuery(["ValorKcl"], () =>
    ValorKcl(dateFormated, kclQuery.data)
  );

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
                  text="Nitrogeno"
                  style={styles.text1}
                  fontStyle="Regular"
                />
                <AppText
                  text={Math.trunc(nitrogenoQuery.data)}
                  style={styles.text2}
                  fontStyle="Regular"
                />
              </View>
              <View style={styles.columns}>
                <AppText
                  text="Fósforo"
                  style={styles.text1}
                  fontStyle="Regular"
                />
                <AppText
                  text={Math.trunc(fosforoQuery.data)}
                  style={[styles.text2, { color: "red" }]}
                  fontStyle="Regular"
                />
              </View>
              <View style={styles.columns}>
                <AppText
                  text="Potasio"
                  style={styles.text1}
                  fontStyle="Regular"
                />
                <AppText
                  text={Math.trunc(potasioQuery.data)}
                  style={[styles.text2, { color: "blue" }]}
                  fontStyle="Regular"
                />
              </View>
            </View>
          </DataSectionColumns>
          <DataSectionColumns title={title2}>
            <View style={styles.section1}>
              <View style={styles.columns}>
                <AppText text="Urea" style={styles.text1} fontStyle="Regular" />
                <AppText
                  text={Math.trunc(ureaQuery.data) + " kg"}
                  style={styles.text2}
                  fontStyle="Regular"
                />
              </View>
              <View style={styles.columns}>
                <AppText text="SPT" style={styles.text1} fontStyle="Regular" />
                <AppText
                  text={Math.trunc(sptQuery.data) + " kg"}
                  style={[styles.text2, { color: "red" }]}
                  fontStyle="Regular"
                />
              </View>
              <View style={styles.columns}>
                <AppText text="KCL" style={styles.text1} fontStyle="Regular" />
                <AppText
                  text={Math.trunc(kclQuery.data) + " kg"}
                  style={[styles.text2, { color: "blue" }]}
                  fontStyle="Regular"
                />
              </View>
            </View>
          </DataSectionColumns>
          <DataSection title={title3}>
            <View style={styles.section2}>
              <DataListItem
                title="Urea"
                data={"$ " + Math.trunc(valorUreaQuery.data)}
              />
              <DataListItem
                title="SPT"
                data={"$ " + Math.trunc(valorSptQuery.data)}
              />
              <DataListItem
                title="KCL"
                data={"$ " + Math.trunc(valorKclQuery.data)}
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
