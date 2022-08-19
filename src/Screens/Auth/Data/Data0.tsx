import React, { useContext } from "react";
import { StyleSheet, View, ScrollView, Platform } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import RNPickerSelect from "react-native-picker-select";
import { theme } from "../../../theme";
import AppContext from "../../../Context/AppContext";
import Container from "../../../Components/Container";
import TextInput from "../../../Components/TextInput.js";
import Button from "../../../Components/Button";
import AppText from "../../../Components/AppText";
import { Formik } from "formik";
import * as Yup from "yup";

const validations = Yup.object().shape({
  id_ubicacion: Yup.string()
    .required("Seleccione una ubicación")
    .label("Ubicación"),
  capacidad_estanque: Yup.number()
    .required("Ingrese una capacidad")
    .positive("Cantidad inválida")
    .integer("Cantidad inválida")
    .label("Capacidad del estanque"),
  unidades_equipo_ordena: Yup.number()
    .required("Ingrese número de unidades")
    .positive("Cantidad inválida")
    .integer("Cantidad inválida")
    .label("Unidades del equipo de ordeña"),
  id_sistema_limpieza: Yup.string()
    .required("Seleccione un sistema de limpieza")
    .label("Sistema de limpieza"),
  id_separacion_solidos: Yup.string()
    .required("Seleccione separación de solidos")
    .label("Separación de solidos"),
});

const Capitalize = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

const Data0 = ({ route, navigation }) => {
  const { FunctionalData, User_ID } = useContext(AppContext);
  const { drop_ubicaciones, drop_sistLimpieza, drop_sepSolidos } =
    FunctionalData;

  const handleSubmit = (values) => {
    console.log("id: ", User_ID);
    const formSalaOrdena = {
      ...values,
      id_usuario: User_ID,
    };
    console.log("formSalaOrdena: ", formSalaOrdena);
    navigation.navigate("Data1", {
      formSalaOrdena,
    });
  };

  return (
    <Formik
      initialValues={{
        id_ubicacion: "",
        capacidad_estanque: "",
        unidades_equipo_ordena: "",
        id_sistema_limpieza: "",
        id_separacion_solidos: "",
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
              <ScrollView style={styles.scroll}>
                <View style={styles.title_box}>
                  <View style={styles.title_align}>
                    <AppText
                      style={styles.title}
                      text={"Ingreso de datos"}
                      fontStyle="Regular"
                    />
                    <AppText
                      style={{ fontSize: 22, color: "#fff" }}
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
                        setFieldValue("id_ubicacion", value)
                      }
                      value={values.id_ubicacion}
                      useNativeAndroidPickerStyle={true}
                      fixAndroidTouchableBug={true}
                      doneText="Aceptar"
                      style={{
                        inputAndroid: { color: "#fff" },
                        inputIOS: { color: "#fff" },
                      }}
                      placeholder={{
                        label: "Seleccione una comuna",
                        value: null,
                      }}
                      items={drop_ubicaciones.map(({ comuna, id }) => ({
                        label: comuna,
                        value: id,
                      }))}
                    />
                  </View>
                  {errors.id_ubicacion && touched.id_ubicacion && (
                    <AppText
                      text={errors.id_ubicacion}
                      fontStyle="Regular"
                      style={styles.errorText}
                    />
                  )}

                  <TextInput
                    placeholder="Ingrese capacidad en lt(s) del estanque de leche"
                    label={"Capacidad del estanque"}
                    onChangeText={handleChange("capacidad_estanque")}
                    onBlur={handleBlur("capacidad_estanque")}
                    value={values.capacidad_estanque.toString()}
                    keyboardType="numeric"
                    keyboardAppearance="dark"
                    returnKeyType="next"
                    returnKeyLabel="next"
                  />
                  {errors.capacidad_estanque && touched.capacidad_estanque && (
                    <AppText
                      text={errors.capacidad_estanque}
                      fontStyle="Regular"
                      style={styles.errorText}
                    />
                  )}

                  <TextInput
                    placeholder="Ingrese el número de equipos de ordeña"
                    label={"Unidades del equipo de ordeña"}
                    onChangeText={handleChange("unidades_equipo_ordena")}
                    onBlur={handleBlur("unidades_equipo_ordena")}
                    value={values.unidades_equipo_ordena.toString()}
                    keyboardType="numeric"
                    keyboardAppearance="dark"
                    returnKeyType="next"
                    returnKeyLabel="next"
                  />
                  {errors.unidades_equipo_ordena &&
                    touched.unidades_equipo_ordena && (
                      <AppText
                        text={errors.unidades_equipo_ordena}
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
                        setFieldValue("id_sistema_limpieza", value)
                      }
                      value={values.id_sistema_limpieza}
                      useNativeAndroidPickerStyle={true}
                      fixAndroidTouchableBug={true}
                      doneText="Aceptar"
                      placeholder={{
                        label: "Seleccione un sistema de limpieza",
                        value: null,
                      }}
                      style={{
                        inputAndroid: { color: "#fff" },
                        inputIOS: { color: "#fff" },
                      }}
                      items={drop_sistLimpieza.map(
                        ({ descripcion, id, porcentaje_eficiencia }) => ({
                          label:
                            Capitalize(descripcion) +
                            " - " +
                            porcentaje_eficiencia +
                            "%",
                          value: id,
                        })
                      )}
                    />
                  </View>
                  {errors.id_sistema_limpieza &&
                    touched.id_sistema_limpieza && (
                      <AppText
                        text={errors.id_sistema_limpieza}
                        fontStyle="Regular"
                        style={styles.errorText}
                      />
                    )}

                  <View style={styles.input_box}>
                    <AppText
                      style={styles.inputLabel}
                      text={"Separación de solidos"}
                      fontStyle="Regular"
                    />
                    <RNPickerSelect
                      onValueChange={(value) =>
                        setFieldValue("id_separacion_solidos", value)
                      }
                      value={values.id_separacion_solidos}
                      useNativeAndroidPickerStyle={true}
                      fixAndroidTouchableBug={true}
                      doneText="Aceptar"
                      placeholder={{
                        label: "Seleccione separación de solidos",
                        value: null,
                      }}
                      style={{
                        inputAndroid: { color: "#fff" },
                        inputIOS: { color: "#fff" },
                      }}
                      items={drop_sepSolidos.map(({ descripcion, id }) => ({
                        label: descripcion,
                        value: id,
                      }))}
                    />
                  </View>
                  {errors.id_separacion_solidos &&
                    touched.id_separacion_solidos && (
                      <AppText
                        text={errors.id_separacion_solidos}
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
    color: "#fff",
  },
  subtitle: {
    fontSize: 18,
    color: theme.colors.secondary,
  },
  input_box: {
    marginBottom: 10,
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "grey",
  },
  inputLabel: {
    fontSize: 16,
    color: theme.colors.green,
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
