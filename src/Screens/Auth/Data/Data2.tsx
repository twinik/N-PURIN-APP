import React from "react";
import { StyleSheet, View } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import RNPickerSelect from "react-native-picker-select";
import Container from "../../../Components/Container";
import TextInput from "../../../Components/TextInput.js";
import Button from "../../../Components/Button";
import AppText from "../../../Components/AppText";
import { Formik } from "formik";
import * as Yup from "yup";

const validations = Yup.object().shape({
  nVacas: Yup.number()
    .required("Ingrese una cantidad")
    .positive("Cantidad inválida")
    .integer("Cantidad inválida"),
  alimentacion: Yup.string().required("Seleccione un tipo de alimentación"),
  confinamiento: Yup.number()
    .required("Ingrese una cantidad")
    .positive("Cantidad inválida")
    .integer("Cantidad inválida"),
});

const Data2 = ({ route, navigation }) => {
  const prev = route.params;
  return (
    <Formik
      initialValues={{
        nVacas: "",
        alimentacion: "",
        confinamiento: "",
      }}
      onSubmit={(values) => {
        navigation.navigate("Data3", {
          ...prev,
          nVacas: values.nVacas,
          alimentacion: values.alimentacion,
          confinamiento: values.confinamiento,
        });
      }}
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
                    text={"3/4"}
                    fontStyle="Regular"
                  />
                </View>
                <View style={{ flex: 1, justifyContent: "flex-end" }}>
                  <AppText
                    style={styles.subtitle}
                    text={"Ingrese los datos de vacas en ordeña"}
                    fontStyle="Regular"
                  />
                </View>
              </View>

              <View style={styles.form_box}>
                <TextInput
                  placeholder="Ingrese canitdad de vacas"
                  label={"N° de vacas"}
                  onChangeText={handleChange("nVacas")}
                  onBlur={handleBlur("nVacas")}
                  value={values.nVacas.toString()}
                  keyboardType="numeric"
                  keyboardAppearance="dark"
                  returnKeyType="next"
                  returnKeyLabel="next"
                />
                {errors.nVacas && touched.nVacas && (
                  <AppText
                    text={errors.nVacas}
                    fontStyle="Regular"
                    style={styles.errorText}
                  />
                )}

                <View style={styles.input_box}>
                  <AppText
                    style={styles.inputLabel}
                    text={"Tipo de alimentación"}
                    fontStyle="Regular"
                  />
                  <RNPickerSelect
                    onValueChange={(value) =>
                      setFieldValue("alimentacion", value)
                    }
                    value={values.alimentacion}
                    useNativeAndroidPickerStyle={true}
                    fixAndroidTouchableBug={true}
                    doneText="Aceptar"
                    placeholder={{
                      label: "Seleccione un tipo de alimentacion",
                      value: null,
                    }}
                    items={[
                      { label: "Opcion A", value: "a" },
                      { label: "Opcion B", value: "b" },
                    ]}
                  />
                </View>
                {errors.alimentacion && touched.alimentacion && (
                  <AppText
                    text={errors.alimentacion}
                    fontStyle="Regular"
                    style={styles.errorText}
                  />
                )}

                <TextInput
                  placeholder="Ingrese canitdad horas"
                  label={"Horas de confinamiento"}
                  onChangeText={handleChange("confinamiento")}
                  onBlur={handleBlur("confinamiento")}
                  value={values.confinamiento.toString()}
                  keyboardType="numeric"
                  keyboardAppearance="dark"
                  returnKeyType="next"
                  returnKeyLabel="next"
                />
                {errors.confinamiento && touched.confinamiento && (
                  <AppText
                    text={errors.confinamiento}
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
