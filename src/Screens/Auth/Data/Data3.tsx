import React, { useContext, useEffect } from "react";
import { StyleSheet, View, ToastAndroid } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import Container from "../../../Components/Container";
import { theme } from "../../../theme";
import TextInput from "../../../Components/TextInput.js";
import AppContext from "../../../Context/AppContext";
import Button from "../../../Components/Button";
import AppText from "../../../Components/AppText";
import { Formik } from "formik";
import * as Yup from "yup";
import { getForm, setForm } from "../../../Context/asyncStorage";

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
  const { SendForms, User_Type, User_ID, SignIn, Email, Password } =
    useContext(AppContext);
  const prev = route.params;
  var prevForm = null;

  useEffect(() => {
    try {
      console.log("User_Type: ", User_Type);
      console.log("email, password: ", prev.email, prev.password);
      const getform = async () => {
        prevForm = await getForm();
      };
      getform();
    } catch (error) {
      alert(error.message);
    }
  }, []);

  function showToast() {
    ToastAndroid.show(
      "Registrado correctamente, iniciando sesión...",
      ToastAndroid.SHORT
    );
  }

  const handleSubmit = async (values) => {
    if (User_Type === 1) {
      const formPozoPurinero = {
        ...values,
        id_usuario: User_ID,
      };
      await setForm(formPozoPurinero);
      navigation.navigate("Data4", {
        ...prev,
        formPozoPurinero,
      });
    } else {
      const formPozoPurinero = {
        ...values,
        id_usuario: User_ID,
      };
      const form = {
        ...prev,
        formPozoPurinero,
      };
      console.log("formulario", form);
      try {
        await setForm(formPozoPurinero);
        await SendForms(form);
        showToast();
        await SignIn(Email, Password, navigation);
        //navigation.navigate("Login");
      } catch (error) {
        alert("Ups! Algo salió mal. Intenta de nuevo");
        console.log(error);
      }
    }
  };

  const templateForm = {
    diametro: "",
    profundidad: "",
  };

  return (
    <Formik
      initialValues={prevForm != null ? { ...prevForm[3] } : templateForm}
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
                  placeholder="Ingrese diámetro en metros"
                  label={"Diámetro"}
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
                  placeholder="Ingrese profundidad en metros"
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
                {User_Type === 0 ? (
                  <Button
                    style={styles.button}
                    label={"Finalizar"}
                    onPress={handleSubmit}
                  />
                ) : (
                  <Button
                    style={styles.button}
                    label={"Continuar"}
                    onPress={handleSubmit}
                  />
                )}
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
