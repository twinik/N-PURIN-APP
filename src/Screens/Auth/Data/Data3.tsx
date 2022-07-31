import React from "react";
import { StyleSheet, View } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import Container from "../../../Components/Container";
import TextInput from "../../../Components/TextInput.js";
import Button from "../../../Components/Button";
import AppText from "../../../Components/AppText";
import { Formik } from "formik";
import * as Yup from "yup";

const validations = Yup.object().shape({
  diametro: Yup.number()
    .required("Ingrese una cantidad")
    .positive("Cantidad inválida")
    .integer("Cantidad inválida"),
  profundidad: Yup.number()
    .required("Ingrese una cantidad")
    .positive("Cantidad inválida")
    .integer("Cantidad inválida"),
});

const Data3 = ({ route, navigation }) => {
  const prev = route.params;

  const handleSubmit = (values) => {
    const userObject = {
      ...prev,
      ...values,
      diametro: values.diametro,
      profundidad: values.profundidad,
    };

    console.log("Usuario: ", { userObject });
    navigation.navigate("Login", { userObject });
  };

  return (
    <Formik
      initialValues={{
        diametro: "",
        profundidad: "",
      }}
      onSubmit={(values) => handleSubmit(values)}
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
                  <AppText
                    style={styles.title}
                    text={"Ingreso de datos"}
                    fontStyle="Regular"
                  />
                  <AppText
                    style={{ fontSize: 22 }}
                    text={"4/4"}
                    fontStyle="Regular"
                  />
                </View>
                <View style={{ flex: 1, justifyContent: "flex-end" }}>
                  <AppText
                    style={styles.subtitle}
                    text={"Ingrese los datos del pozo purinero"}
                    fontStyle="Regular"
                  />
                </View>
              </View>

              <View style={styles.form_box}>
                <TextInput
                  placeholder="Ingrese diametro en mt(s)"
                  label={"Diametro"}
                  onChangeText={handleChange("diametro")}
                  onBlur={handleBlur("diametro")}
                  value={values.diametro.toString()}
                  keyboardType="numeric"
                  keyboardAppearance="dark"
                  returnKeyType="next"
                  returnKeyLabel="next"
                />
                {errors.diametro && touched.diametro && (
                  <AppText
                    text={errors.diametro}
                    fontStyle="Regular"
                    style={styles.errorText}
                  />
                )}

                <TextInput
                  placeholder="Ingrese profundidad en mt(s)"
                  label={"Profundidad"}
                  onChangeText={handleChange("profundidad")}
                  onBlur={handleBlur("profundidad")}
                  value={values.profundidad.toString()}
                  keyboardType="numeric"
                  keyboardAppearance="dark"
                  returnKeyType="next"
                  returnKeyLabel="next"
                />
                {errors.profundidad && touched.profundidad && (
                  <AppText
                    text={errors.profundidad}
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

export default Data3;

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
    height: hp(11),
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
