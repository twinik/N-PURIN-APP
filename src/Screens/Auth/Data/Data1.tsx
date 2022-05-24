import React, { useState } from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { Picker } from "@react-native-picker/picker";
import DropDownPicker from "react-native-dropdown-picker";
import { useFonts } from "expo-font";
import { theme } from "../../../theme";
import Container from "../../../Components/Container";
import Title from "../../../Components/Title";
import Text from "../../../Components/NormalText";
import TextInput from "../../../Components/TextInput.js";
import SecureTextInput from "../../../Components/SecureTextInput";
import Button from "../../../Components/Button";
import MyText from "../../../Components/MyText";
import { Formik } from "formik";
import * as Yup from "yup";

const validations = Yup.object().shape({
  agua: Yup.number()
    .required("Seleccione cantidad de litros")
    .positive("Cantidad inválida")
    .integer("Cantidad inválida")
    .label("Cantidad de litros"),
  sistLimpieza: Yup.string()
    .required("Seleccione un sistema de limpieza")
    .label("Sistema de limpieza"),
  solidos: Yup.string()
    .required("Seleccione un tipo de separación de solidos")
    .label("Separación de solidos"),
});

const Data1 = ({ route, navigation }) => {
  const { email, password, nVacas, raza, alimentacion, estabulacion } =
    route.params;
  const [loaded] = useFonts({
    Main: require("../../../../assets/fonts/Staatliches.ttf"),
  });
  if (!loaded) {
    return null;
  }
  return (
    <Formik
      initialValues={{
        agua: 0,
        sistLimpieza: "",
        solidos: "",
      }}
      onSubmit={(values) =>
        navigation.navigate("Data2", {
          email: email,
          password: password,
          nVacas: nVacas,
          raza: raza,
          alimentacion: alimentacion,
          estabulacion: estabulacion,
          agua: values.agua,
          sistLimpieza: values.sistLimpieza,
          solidos: values.solidos,
        })
      }
      validationSchema={validations}
    >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        setFieldValue,
        values,
        errors,
        touched,
      }) => (
        <Container>
          <View style={styles.container}>
            <View style={styles.content}>
              <View style={styles.title_box}>
                <View style={styles.title_align}>
                  <MyText
                    style={styles.title}
                    text={"Ingreso de datos"}
                    fontStyle="Regular"
                  />
                  <MyText
                    style={{ fontSize: 22 }}
                    text={"2/3"}
                    fontStyle="Regular"
                  />
                </View>
                <View style={{ flex: 1, justifyContent: "flex-end" }}>
                  <MyText
                    style={styles.subtitle}
                    text={"Ingrese sus datos para poder continuar."}
                    fontStyle="Regular"
                  />
                </View>
              </View>

              <View style={styles.form_box}>
                <View style={styles.input_box}>
                  <MyText
                    style={styles.inputLabel}
                    text={"Sistema de  limpieza"}
                    fontStyle="Regular"
                  />

                  <Picker
                    prompt="Seleccione un sistema de limpieza"
                    selectedValue={values.sistLimpieza}
                    onValueChange={(itemValue, itemIndex) =>
                      setFieldValue("sistLimpieza", itemValue)
                    }
                  >
                    <Picker.Item label="Bulldog" value="bd" color="black" />
                    <Picker.Item
                      label="Golden Retriever"
                      value="gr"
                      color="black"
                    />
                  </Picker>
                </View>
                {errors.sistLimpieza && touched.sistLimpieza && (
                  <MyText
                    text={errors.sistLimpieza}
                    fontStyle="Regular"
                    style={styles.errorText}
                  />
                )}

                <View style={styles.input_box}>
                  <MyText
                    style={styles.inputLabel}
                    text={"Separacion de solidos"}
                    fontStyle="Regular"
                  />
                  <Picker
                    prompt="Seleccione un tipo separacion de solidos"
                    selectedValue={values.solidos}
                    onValueChange={(itemValue, itemIndex) =>
                      setFieldValue("solidos", itemValue)
                    }
                  >
                    <Picker.Item label="Carnivora" value="dni" color="black" />
                    <Picker.Item
                      label="Vegana"
                      value="pasaporte"
                      color="black"
                    />
                  </Picker>
                </View>
                {errors.solidos && touched.solidos && (
                  <MyText
                    text={errors.solidos}
                    fontStyle="Regular"
                    style={styles.errorText}
                  />
                )}

                <TextInput
                  placeholder="Ingrese litros de agua"
                  label={"Litros de agua utilizados en limpieza"}
                  onChangeText={handleChange("agua")}
                  onBlur={handleBlur("agua")}
                  value={values.agua}
                  keyboardType="numeric"
                  keyboardAppearance="dark"
                  returnKeyType="next"
                  returnKeyLabel="next"
                />
                {errors.agua && touched.agua && (
                  <MyText
                    text={errors.agua}
                    fontStyle="Regular"
                    style={styles.errorText}
                  />
                )}
              </View>

              <View style={styles.btn_box}>
                <Button
                  style={styles.button}
                  label={"Continuar"}
                  onPress={handleSubmit}
                />
              </View>
            </View>
          </View>
        </Container>
      )}
    </Formik>
  );
};

export default Data1;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    flex: 1,
  },
  content: {
    width: wp(80),
    height: hp(80),
  },
  title_box: {
    height: hp(15),
  },
  form_box: {
    height: hp(55),
    paddingTop: 10,
    paddingBottom: 10,
  },
  btn_box: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  title_align: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 35,
    textTransform: "uppercase",
  },
  subtitle: {
    fontSize: 18,
    color: "gray",
  },
  input_box: {
    marginBottom: 10,
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "grey",
  },
  inputLabel: {
    fontSize: 16,
    color: "#7936E4",
  },
  input: {
    height: 40,
  },
  button: {
    height: hp(6),
    justifyContent: "center",
  },
  errorText: {
    color: "red",
    fontSize: hp(1.5),
  },
});
