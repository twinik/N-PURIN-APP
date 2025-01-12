import React, { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import Container from "../../../Components/Container";
import { theme } from "../../../theme";
import TextInput from "../../../Components/TextInput.js";
import Button from "../../../Components/Button";
import AppText from "../../../Components/AppText";
import { Formik } from "formik";
import * as Yup from "yup";
import { getForm, setForm } from "../../../Context/asyncStorage";

const validations = Yup.object().shape({
  metros_sin_techar: Yup.number()
    .required("Ingrese una cantidad")
    .positive("Cantidad inválida")
    .integer("Cantidad inválida")
    .label("Cantidad sin techar"),
  metros_sin_canalizar: Yup.number()
    .required("Ingrese una cantidad")
    .positive("Cantidad inválida")
    .integer("Cantidad inválida")
    .label("Cantidad sin canalizar"),
});

const Data1 = ({ route, navigation }) => {
  const prev = route.params;
  var prevForm = null;

  useEffect(() => {
    try {
      const getform = async () => {
        prevForm = await getForm();
      };
      getform();
    } catch (error) {
      alert(error.message);
    }
  }, []);

  const handleSubmit = async (values) => {
    const formConstruccion = {
      ...values,
      id_usuario: prev.formSalaOrdena.id_usuario,
    };
    await setForm(formConstruccion);
    navigation.navigate("Data2", {
      ...prev,
      formConstruccion,
    });
  };

  const templateForm = {
    metros_sin_techar: "",
    metros_sin_canalizar: "",
  };

  return (
    <Formik
      initialValues={prevForm != null ? { ...prevForm[1] } : templateForm}
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
                    style={{ fontSize: 22, color: "#fff" }}
                    text={"2/4"}
                    fontStyle="Regular"
                  />
                </View>
                <View style={{ flex: 1, justifyContent: "flex-end" }}>
                  <AppText
                    style={styles.subtitle}
                    text={"Ingrese los datos de construcciones"}
                    fontStyle="Regular"
                  />
                </View>
              </View>

              <View style={styles.form_box}>
                <TextInput
                  placeholder="Ingrese cantidad de metros cuadrados sin techar"
                  label={"Construcciones sin techar"}
                  onChangeText={handleChange("metros_sin_techar")}
                  onBlur={handleBlur("metros_sin_techar")}
                  value={values.metros_sin_techar.toString()}
                  keyboardType="numeric"
                  keyboardAppearance="dark"
                  returnKeyType="next"
                  returnKeyLabel="next"
                />
                {errors.metros_sin_techar && touched.metros_sin_techar && (
                  <AppText
                    text={errors.metros_sin_techar}
                    fontStyle="Regular"
                    style={styles.errorText}
                  />
                )}

                <TextInput
                  placeholder="Ingrese cantidad de metros cuadrados sin canalizar"
                  label={"Construcciones sin canalizar"}
                  onChangeText={handleChange("metros_sin_canalizar")}
                  onBlur={handleBlur("metros_sin_canalizar")}
                  value={values.metros_sin_canalizar.toString()}
                  keyboardType="numeric"
                  keyboardAppearance="dark"
                  returnKeyType="next"
                  returnKeyLabel="next"
                />
                {errors.metros_sin_canalizar &&
                  touched.metros_sin_canalizar && (
                    <AppText
                      text={errors.metros_sin_canalizar}
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
    height: hp(11),
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
