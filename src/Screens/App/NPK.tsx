import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, View, ActivityIndicator } from "react-native";
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

  function formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
  }

  function addZeroBefore(n: number) {
    return (n < 10 ? "0" : "") + n;
  }

  const date = new Date();
  /*  const dateFormated =
    date.getFullYear() +
    "-" +
    addZeroBefore(date.getMonth() + 1) +
    "-" +
    addZeroBefore(date.getDate()); */
  const dateFormated = "2023-03-01";

  const nitrogenoQuery = useQuery(["Nitrogeno"], () =>
    Nitrogeno(cantidadPurin)
  );
  const ureaQuery = useQuery(["Urea"], () => Urea(cantidadPurin));
  const fosforoQuery = useQuery(["Fosforo"], () => Fosforo(cantidadPurin));
  const sptQuery = useQuery(["SPT"], () => SPT(cantidadPurin));
  const potasioQuery = useQuery(["Potasio"], () => Potasio(cantidadPurin));
  const kclQuery = useQuery(["KCL"], () => KCL(cantidadPurin));

  const valorUreaQuery = useQuery(
    ["ValorUrea"],
    async () => await ValorUrea(dateFormated, ureaQuery.data)
  );

  const valorSptQuery = useQuery(["ValorSpt"], () =>
    ValorSpt(dateFormated, sptQuery.data)
  );
  const valorKclQuery = useQuery(["ValorKcl"], () =>
    ValorKcl(dateFormated, kclQuery.data)
  );

  const [valorUrea, setValorUrea] = useState(0);
  const [valorSpt, setValorSpt] = useState(0);
  const [valorKcl, setValorKcl] = useState(0);

  useEffect(() => {
    valorUreaQuery.refetch();
    valorSptQuery.refetch();
    valorKclQuery.refetch();
    valorUreaQuery.data && setValorUrea(valorUreaQuery.data);
    valorSptQuery.data && setValorSpt(valorSptQuery.data);
    valorKclQuery.data && setValorKcl(valorKclQuery.data);
  }, [valorUreaQuery.data, valorSptQuery.data, valorKclQuery.data]);

  if (valorUreaQuery.isLoading) {
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

  if (valorUreaQuery.isError) {
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
                  text={formatNumber(Math.trunc(nitrogenoQuery.data))}
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
                  text={formatNumber(Math.trunc(fosforoQuery.data))}
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
                  text={formatNumber(Math.trunc(potasioQuery.data))}
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
                  text={formatNumber(Math.trunc(ureaQuery.data)) + " kg"}
                  style={styles.text2}
                  fontStyle="Regular"
                />
              </View>
              <View style={styles.columns}>
                <AppText text="SPT" style={styles.text1} fontStyle="Regular" />
                <AppText
                  text={formatNumber(Math.trunc(sptQuery.data)) + " kg"}
                  style={[styles.text2, { color: "red" }]}
                  fontStyle="Regular"
                />
              </View>
              <View style={styles.columns}>
                <AppText text="KCL" style={styles.text1} fontStyle="Regular" />
                <AppText
                  text={formatNumber(Math.trunc(kclQuery.data)) + " kg"}
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
                data={"$ " + formatNumber(Math.trunc(valorUrea))}
              />
              <DataListItem
                title="SPT"
                data={"$ " + formatNumber(Math.trunc(valorSpt))}
              />
              <DataListItem
                title="KCL"
                data={"$ " + formatNumber(Math.trunc(valorKcl))}
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
