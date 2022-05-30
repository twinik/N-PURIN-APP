import React from "react";
import { StyleSheet, View } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import RNPickerSelect from "react-native-picker-select";
import { useFonts } from "expo-font";
import { theme } from "../../../theme";
import Container from "../../../Components/Container";
import Button from "../../../Components/Button";
import AppText from "../../../Components/AppText";
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
  const prev = route.params;
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
      onSubmit={(values) => {
        navigation.navigate("Login", {
          ...prev,
          tipo: values.tipo,
          dimensiones: values.dimensiones,
          bomba: values.bomba,
          tecnologia: values.tecnologia,
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
                    text={"3/3"}
                    fontStyle="Regular"
                  />
                </View>
                <View style={{ flex: 1, justifyContent: "flex-end" }}>
                  <AppText
                    style={styles.subtitle}
                    text={"Ingrese sus datos para poder continuar."}
                    fontStyle="Regular"
                  />
                </View>
              </View>

              <View style={styles.form_box}>
                <View style={styles.input_box}>
                  <AppText
                    style={styles.inputLabel}
                    text={"Tipo"}
                    fontStyle="Regular"
                  />

                  <RNPickerSelect
                    onValueChange={(value) => setFieldValue("tipo", value)}
                    value={values.tipo}
                    useNativeAndroidPickerStyle={true}
                    fixAndroidTouchableBug={true}
                    doneText="Aceptar"
                    placeholder={{
                      label: "Seleccione un tipo",
                      value: null,
                    }}
                    items={[
                      { label: "Tipo a", value: "a" },
                      { label: "Tipo b", value: "b" },
                    ]}
                  />
                </View>
                {errors.tipo && touched.tipo && (
                  <AppText
                    text={errors.tipo}
                    fontStyle="Regular"
                    style={styles.errorText}
                  />
                )}

                <View style={styles.input_box}>
                  <AppText
                    style={styles.inputLabel}
                    text={"Dimensiones"}
                    fontStyle="Regular"
                  />

                  <RNPickerSelect
                    onValueChange={(value) =>
                      setFieldValue("dimensiones", value)
                    }
                    value={values.dimensiones}
                    useNativeAndroidPickerStyle={true}
                    fixAndroidTouchableBug={true}
                    doneText="Aceptar"
                    placeholder={{
                      label: "Seleccione una dimension",
                      value: null,
                    }}
                    items={[
                      { label: "500mts", value: "a" },
                      { label: "2400mts", value: "b" },
                    ]}
                  />
                </View>
                {errors.dimensiones && touched.dimensiones && (
                  <AppText
                    text={errors.dimensiones}
                    fontStyle="Regular"
                    style={styles.errorText}
                  />
                )}

                <View style={styles.input_box}>
                  <AppText
                    style={styles.inputLabel}
                    text={"Bomba(s)"}
                    fontStyle="Regular"
                  />
                  <RNPickerSelect
                    onValueChange={(value) => setFieldValue("bomba", value)}
                    value={values.bomba}
                    useNativeAndroidPickerStyle={true}
                    fixAndroidTouchableBug={true}
                    doneText="Aceptar"
                    placeholder={{
                      label: "Seleccione un tipo de bomba",
                      value: null,
                    }}
                    items={[
                      { label: "Nuclear", value: "a" },
                      { label: "Atomica", value: "b" },
                    ]}
                  />
                </View>
                {errors.bomba && touched.bomba && (
                  <AppText
                    text={errors.bomba}
                    fontStyle="Regular"
                    style={styles.errorText}
                  />
                )}
                <View style={styles.input_box}>
                  <AppText
                    style={styles.inputLabel}
                    text={"Tecnología"}
                    fontStyle="Regular"
                  />
                  <RNPickerSelect
                    onValueChange={(value) =>
                      setFieldValue("tecnologia", value)
                    }
                    value={values.tecnologia}
                    useNativeAndroidPickerStyle={true}
                    fixAndroidTouchableBug={true}
                    doneText="Aceptar"
                    placeholder={{
                      label: "Seleccione un tipo de tecnologia",
                      value: null,
                    }}
                    items={[
                      { label: "Limpia", value: "a" },
                      { label: "Flexible", value: "b" },
                    ]}
                  />
                </View>
                {errors.tecnologia && touched.tecnologia && (
                  <AppText
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
