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
  tipo: Yup.string().required("Seleccione un tipo").label("Tipo"),
  dimensiones: Yup.string()
    .required("Seleccione una dimension")
    .label("Dimensiones"),
  bomba: Yup.string().required("Seleccione un tipo de bomba").label("Bomba"),
  tecnologia: Yup.string()
    .required("Seleccione un tipo de tecnología")
    .label("Tecnología"),
});

const Data2 = ({ route, navigation }) => {
  const {
    email,
    password,
    nVacas,
    raza,
    alimentacion,
    estabulacion,
    agua,
    sistLimpieza,
    solidos,
  } = route.params;
  const [loaded] = useFonts({
    Main: require("../../../../assets/fonts/Staatliches.ttf"),
  });
  if (!loaded) {
    return null;
  }
  return (
    <Formik
      initialValues={{
        tipo: "",
        dimensiones: "",
        bomba: "",
        tecnologia: "",
      }}
      onSubmit={(values) =>
        navigation.navigate("Data1", {
          email: email,
          password: password,
          nVacas: nVacas,
          raza: raza,
          alimentacion: alimentacion,
          estabulacion: estabulacion,
          agua: agua,
          sistLimpieza: sistLimpieza,
          solidos: solidos,
          tipo: values.tipo,
          dimensiones: values.dimensiones,
          bomba: values.bomba,
          tecnologia: values.tecnologia,
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
                    text={"3/3"}
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
                    text={"Tipo"}
                    fontStyle="Regular"
                  />

                  <Picker
                    prompt="Seleccione un tipo"
                    selectedValue={values.tipo}
                    onValueChange={(itemValue, itemIndex) =>
                      setFieldValue("tipo", itemValue)
                    }
                    placeholder="Seleccione un tipo"
                  >
                    <Picker.Item label="Bulldog" value="bd" color="black" />
                    <Picker.Item
                      label="Golden Retriever"
                      value="gr"
                      color="black"
                    />
                  </Picker>
                </View>
                {errors.tipo && touched.tipo && (
                  <MyText
                    text={errors.tipo}
                    fontStyle="Regular"
                    style={styles.errorText}
                  />
                )}

                <View style={styles.input_box}>
                  <MyText
                    style={styles.inputLabel}
                    text={"Dimensiones"}
                    fontStyle="Regular"
                  />

                  <Picker
                    prompt="Seleccione una dimension"
                    selectedValue={values.dimensiones}
                    onValueChange={(itemValue, itemIndex) =>
                      setFieldValue("dimensiones", itemValue)
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
                {errors.dimensiones && touched.dimensiones && (
                  <MyText
                    text={errors.dimensiones}
                    fontStyle="Regular"
                    style={styles.errorText}
                  />
                )}

                <View style={styles.input_box}>
                  <MyText
                    style={styles.inputLabel}
                    text={"Bomba(s)"}
                    fontStyle="Regular"
                  />
                  <Picker
                    prompt="Seleccione un tipo de bomba"
                    selectedValue={values.bomba}
                    onValueChange={(itemValue, itemIndex) =>
                      setFieldValue("bomba", itemValue)
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
                {errors.bomba && touched.bomba && (
                  <MyText
                    text={errors.bomba}
                    fontStyle="Regular"
                    style={styles.errorText}
                  />
                )}
                <View style={styles.input_box}>
                  <MyText
                    style={styles.inputLabel}
                    text={"Tecnología"}
                    fontStyle="Regular"
                  />
                  <Picker
                    selectedValue={values.tecnologia}
                    onValueChange={(itemValue, itemIndex) =>
                      setFieldValue("tecnologia", itemValue)
                    }
                    prompt="Seleccione un tipo de tecnologia"
                  >
                    <Picker.Item label="Granja" value="dni" color="black" />
                    <Picker.Item
                      label="Rancho"
                      value="pasaporte"
                      color="black"
                    />
                  </Picker>
                </View>
                {errors.tecnologia && touched.tecnologia && (
                  <MyText
                    text={errors.tecnologia}
                    fontStyle="Regular"
                    style={styles.errorText}
                  />
                )}
              </View>

              <View style={styles.btn_box}>
                <Button
                  style={styles.button}
                  label={"Finalizar"}
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

export default Data2;

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
    height: hp(57),
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
