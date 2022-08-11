import React, { useContext } from "react";
import { StyleSheet, View } from "react-native";
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
  num_vacas: Yup.number()
    .required("Ingrese una cantidad")
    .positive("Cantidad inválida")
    .integer("Cantidad inválida"),
  id_tipo_alimentacion: Yup.string().required(
    "Seleccione un tipo de alimentación"
  ),
  horas_confinamiento: Yup.number()
    .required("Ingrese una cantidad")
    .positive("Cantidad inválida")
    .integer("Cantidad inválida"),
});

const Data2 = ({ route, navigation }) => {
  const { FunctionalData } = useContext(AppContext);
  const { drop_alimentacion } = FunctionalData;

  const prev = route.params;

  const handleSubmit = (values) => {
    const formVacaOrdena = {
      ...values,
      id_usuario:prev.formConstruccion.id_usuario
    };
    console.log("form3", {
      ...prev,
      formVacaOrdena,
    });
    navigation.navigate("Data3", {
      ...prev,
      formVacaOrdena,
    });
  };
  return (
    <Formik
      initialValues={{
        num_vacas: "",
        id_tipo_alimentacion: "",
        horas_confinamiento: "",
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
                  onChangeText={handleChange("num_vacas")}
                  onBlur={handleBlur("num_vacas")}
                  value={values.num_vacas.toString()}
                  keyboardType="numeric"
                  keyboardAppearance="dark"
                  returnKeyType="next"
                  returnKeyLabel="next"
                />
                {errors.num_vacas && touched.num_vacas && (
                  <AppText
                    text={errors.num_vacas}
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
                      setFieldValue("id_tipo_alimentacion", value)
                    }
                    value={values.id_tipo_alimentacion}
                    useNativeAndroidPickerStyle={true}
                    fixAndroidTouchableBug={true}
                    doneText="Aceptar"
                    placeholder={{
                      label: "Seleccione un tipo de alimentacion",
                      value: null,
                    }}
                    items={drop_alimentacion.map(({ descripcion, id }) => ({
                      label: descripcion,
                      value: id,
                    }))}
                  />
                </View>
                {errors.id_tipo_alimentacion &&
                  touched.id_tipo_alimentacion && (
                    <AppText
                      text={errors.id_tipo_alimentacion}
                      fontStyle="Regular"
                      style={styles.errorText}
                    />
                  )}

                <TextInput
                  placeholder="Ingrese canitdad horas"
                  label={"Horas de confinamiento"}
                  onChangeText={handleChange("horas_confinamiento")}
                  onBlur={handleBlur("horas_confinamiento")}
                  value={values.horas_confinamiento.toString()}
                  keyboardType="numeric"
                  keyboardAppearance="dark"
                  returnKeyType="next"
                  returnKeyLabel="next"
                />
                {errors.horas_confinamiento && touched.horas_confinamiento && (
                  <AppText
                    text={errors.horas_confinamiento}
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
