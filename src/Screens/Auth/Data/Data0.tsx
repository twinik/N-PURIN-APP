import React, { useEffect, useContext } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import RNPickerSelect from "react-native-picker-select";
import AppContext from "../../../Context/AppContext";
import Container from "../../../Components/Container";
import TextInput from "../../../Components/TextInput.js";
import Button from "../../../Components/Button";
import AppText from "../../../Components/AppText";
import { Formik } from "formik";
import * as Yup from "yup";

const validations = Yup.object().shape({
  ubicacion: Yup.string()
    .required("Seleccione una ubicación")
    .label("Ubicación"),
  estanque: Yup.number()
    .required("Ingrese una capacidad")
    .positive("Cantidad inválida")
    .integer("Cantidad inválida")
    .label("Capacidad del estanque"),
  equipos: Yup.number()
    .required("Ingrese número de unidades")
    .positive("Cantidad inválida")
    .integer("Cantidad inválida")
    .label("Unidades del equipo de ordeña"),
  sistLimpieza: Yup.string()
    .required("Seleccione un sistema de limpieza")
    .label("Sistema de limpieza"),
  solidos: Yup.string()
    .required("Seleccione un tipo de separación de solidos")
    .label("Separación de solidos"),
});

const Data0 = ({ route, navigation }) => {
  const { InitalizeDropdowns } = useContext(AppContext);

  useEffect(() => {
    try {
      InitalizeDropdowns();
    } catch (error) {
      alert(error.message);
    }
  }, []);

  const prev = route.params;
  return (
    <Formik
      initialValues={{
        ubicacion: "",
        estanque: "",
        equipos: "",
        sistLimpieza: "",
        solidos: "",
      }}
      onSubmit={(values) =>
        navigation.navigate("Data1", {
          ...prev,
          ubicacion: values.ubicacion,
          estanque: values.estanque,
          equipos: values.equipos,
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
              <ScrollView style={styles.scroll}>
                <View style={styles.title_box}>
                  <View style={styles.title_align}>
                    <AppText
                      style={styles.title}
                      text={"Ingreso de datos"}
                      fontStyle="Regular"
                    />
                    <AppText
                      style={{ fontSize: 22 }}
                      text={"1/4"}
                      fontStyle="Regular"
                    />
                  </View>
                  <View style={{ flex: 1, justifyContent: "flex-end" }}>
                    <AppText
                      style={styles.subtitle}
                      text={"Ingrese los datos de la sala de ordeña"}
                      fontStyle="Regular"
                    />
                  </View>
                </View>

                <View style={styles.form_box}>
                  <View style={styles.input_box}>
                    <AppText
                      style={styles.inputLabel}
                      text={"Ubicación"}
                      fontStyle="Regular"
                    />

                    <RNPickerSelect
                      onValueChange={(value) =>
                        setFieldValue("ubicacion", value)
                      }
                      value={values.ubicacion}
                      useNativeAndroidPickerStyle={true}
                      fixAndroidTouchableBug={true}
                      doneText="Aceptar"
                      placeholder={{
                        label: "Seleccione una comuna",
                        value: null,
                      }}
                      items={[
                        { label: "Opcion A", value: "a" },
                        { label: "Opcion B", value: "b" },
                      ]}
                    />
                  </View>
                  {errors.ubicacion && touched.ubicacion && (
                    <AppText
                      text={errors.ubicacion}
                      fontStyle="Regular"
                      style={styles.errorText}
                    />
                  )}

                  <TextInput
                    placeholder="Ingrese capacidad en lt(s) del estanque de leche"
                    label={"Capacidad del estanque"}
                    onChangeText={handleChange("estanque")}
                    onBlur={handleBlur("estanque")}
                    value={values.estanque.toString()}
                    keyboardType="numeric"
                    keyboardAppearance="dark"
                    returnKeyType="next"
                    returnKeyLabel="next"
                  />
                  {errors.estanque && touched.estanque && (
                    <AppText
                      text={errors.estanque}
                      fontStyle="Regular"
                      style={styles.errorText}
                    />
                  )}

                  <TextInput
                    placeholder="Ingrese el numero de equipos de ordeña"
                    label={"Unidades del equipo de ordeña"}
                    onChangeText={handleChange("equipos")}
                    onBlur={handleBlur("equipos")}
                    value={values.equipos.toString()}
                    keyboardType="numeric"
                    keyboardAppearance="dark"
                    returnKeyType="next"
                    returnKeyLabel="next"
                  />
                  {errors.equipos && touched.equipos && (
                    <AppText
                      text={errors.equipos}
                      fontStyle="Regular"
                      style={styles.errorText}
                    />
                  )}

                  <View style={styles.input_box}>
                    <AppText
                      style={styles.inputLabel}
                      text={"Sistema de  limpieza"}
                      fontStyle="Regular"
                    />
                    <RNPickerSelect
                      onValueChange={(value) =>
                        setFieldValue("sistLimpieza", value)
                      }
                      value={values.sistLimpieza}
                      useNativeAndroidPickerStyle={true}
                      fixAndroidTouchableBug={true}
                      doneText="Aceptar"
                      placeholder={{
                        label: "Seleccione un sistema de limpieza",
                        value: null,
                      }}
                      items={[
                        { label: "Opcion A", value: "a" },
                        { label: "Opcion B", value: "b" },
                      ]}
                    />
                  </View>
                  {errors.sistLimpieza && touched.sistLimpieza && (
                    <AppText
                      text={errors.sistLimpieza}
                      fontStyle="Regular"
                      style={styles.errorText}
                    />
                  )}

                  <View style={styles.input_box}>
                    <AppText
                      style={styles.inputLabel}
                      text={"Separacion de solidos"}
                      fontStyle="Regular"
                    />
                    <RNPickerSelect
                      onValueChange={(value) => setFieldValue("solidos", value)}
                      value={values.solidos}
                      useNativeAndroidPickerStyle={true}
                      fixAndroidTouchableBug={true}
                      doneText="Aceptar"
                      placeholder={{
                        label: "Seleccione un tipo de separación de solidos",
                        value: null,
                      }}
                      items={[
                        { label: "Opcion A", value: "a" },
                        { label: "Opcion B", value: "b" },
                      ]}
                    />
                  </View>
                  {errors.solidos && touched.solidos && (
                    <AppText
                      text={errors.solidos}
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
              </ScrollView>
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
    height: hp(90),
  },
  scroll: {
    width: "100%",
    height: "100%",
  },
  title_box: {
    height: hp(11),
  },
  form_box: {
    paddingTop: 10,
    paddingBottom: 10,
  },
  btn_box: {
    alignItems: "center",
    justifyContent: "center",
    marginVertical: hp(2),
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
