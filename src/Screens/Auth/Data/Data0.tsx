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
  nVacas: Yup.number()
    .required("Seleccione cantidad de vacas")
    .positive("Cantidad inválida")
    .integer("Cantidad inválida")
    .label("Cantidad de vacas"),
  raza: Yup.string().required("Seleccione una raza").label("Raza"),
  alimentacion: Yup.string()
    .required("Seleccione un tipo de alimentación")
    .label("Alimentación"),
  estabulacion: Yup.string()
    .required("Seleccione un tipo de estabulación")
    .label("Estabulación"),
});

const Data0 = ({ route, navigation }) => {
  const { email, password } = route.params;
  const [loaded] = useFonts({
    Main: require("../../../../assets/fonts/Staatliches.ttf"),
  });
  if (!loaded) {
    return null;
  }
  return (
    <Formik
      initialValues={{
        nVacas: 0,
        raza: "",
        alimentacion: "",
        estabulacion: "",
      }}
      onSubmit={(values) =>
        navigation.navigate("Data1", {
          email: email,
          password: password,
          nVacas: values.nVacas,
          raza: values.raza,
          alimentacion: values.alimentacion,
          estabulacion: values.estabulacion,
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
                    text={"1/3"}
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
                <TextInput
                  placeholder="Ingrese N° de vacas"
                  label={"N° de vacas"}
                  onChangeText={handleChange("nVacas")}
                  onBlur={handleBlur("nVacas")}
                  value={values.nVacas}
                  keyboardType="numeric"
                  keyboardAppearance="dark"
                  returnKeyType="next"
                  returnKeyLabel="next"
                />
                {errors.nVacas && touched.nVacas && (
                  <MyText
                    text={errors.nVacas}
                    fontStyle="Regular"
                    style={styles.errorText}
                  />
                )}

                <View style={styles.input_box}>
                  <MyText
                    style={styles.inputLabel}
                    text={"Raza"}
                    fontStyle="Regular"
                  />

                  <Picker
                    prompt="Seleccione una raza"
                    selectedValue={values.raza}
                    onValueChange={(itemValue, itemIndex) =>
                      setFieldValue("raza", itemValue)
                    }
                    placeholder="Seleccione una ruta"
                  >
                    <Picker.Item label="Bulldog" value="bd" color="black" />
                    <Picker.Item
                      label="Golden Retriever"
                      value="gr"
                      color="black"
                    />
                  </Picker>
                </View>
                {errors.raza && touched.raza && (
                  <MyText
                    text={errors.raza}
                    fontStyle="Regular"
                    style={styles.errorText}
                  />
                )}

                <View style={styles.input_box}>
                  <MyText
                    style={styles.inputLabel}
                    text={"Tipo de alimentación"}
                    fontStyle="Regular"
                  />
                  <Picker
                    prompt="Seleccione un tipo de alimentación"
                    selectedValue={values.alimentacion}
                    onValueChange={(itemValue, itemIndex) =>
                      setFieldValue("alimentacion", itemValue)
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
                {errors.alimentacion && touched.alimentacion && (
                  <MyText
                    text={errors.alimentacion}
                    fontStyle="Regular"
                    style={styles.errorText}
                  />
                )}
                <View style={styles.input_box}>
                  <MyText
                    style={styles.inputLabel}
                    text={"Tipo de estabulación"}
                    fontStyle="Regular"
                  />
                  <Picker
                    selectedValue={values.estabulacion}
                    onValueChange={(itemValue, itemIndex) =>
                      setFieldValue("estabulacion", itemValue)
                    }
                    prompt="Seleccione un tipo de estabulación"
                  >
                    <Picker.Item label="Granja" value="dni" color="black" />
                    <Picker.Item
                      label="Rancho"
                      value="pasaporte"
                      color="black"
                    />
                  </Picker>
                </View>
                {errors.estabulacion && touched.estabulacion && (
                  <MyText
                    text={errors.estabulacion}
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

export default Data0;

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
