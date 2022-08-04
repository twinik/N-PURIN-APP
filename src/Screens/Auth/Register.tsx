import React, { useContext } from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { theme } from "../../theme";
import AppContext from "../../Context/AppContext";
import Container from "../../Components/Container";
import TextInput from "../../Components/TextInput.js";
import SecureTextInput from "../../Components/SecureTextInput";
import Button from "../../Components/Button";
import AppText from "../../Components/AppText";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { Formik } from "formik";
import * as Yup from "yup";
import * as Crypto from "expo-crypto";

const validations = Yup.object().shape({
  email: Yup.string()
    .email("Por favor ingrese un email valido")
    .required("Email es requerido")
    .label("Email"),
  name: Yup.string().required("Nombre es requerido").label("Nombre"),
  password: Yup.string()
    .matches(
      /\w*[a-z]\w*/,
      "La contraseña debe tener al menos una letra minuscula"
    )
    .matches(
      /\w*[A-Z]\w*/,
      "La contraseña debe tener al menos una letra mayuscula"
    )
    .matches(/\d/, "La contraseña debe tener al menos un numero")
    .min(8, ({ min }) => `La contraseña debe tener al menos ${min} caracteres`)
    .required("Contraseña es requerida")
    .label("Contraseña"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Las contraseñas no coinciden")
    .required("Confirmar contraseña es requerida")
    .label("Confirmar contraseña"),
  acceptTerms: Yup.bool().oneOf(
    [true],
    "Debe aceptar los terminos y condiciones"
  ),
});

const Register = ({ navigation }) => {
  const { SignUp } = useContext(AppContext);

  const cryptoPassword = async (password) => {
    const sha256 = Crypto.digestStringAsync(
      Crypto.CryptoDigestAlgorithm.SHA256,
      password
    );
    return sha256;
  };

  const handleSubmit = async (values) => {
    const User = {
      email: values.email,
      name: values.name,
      password: await cryptoPassword(values.password),
    };

    console.log("User: ", { User });

    try {
      await SignUp(User);
      navigation.navigate("Data0", { User });
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <Formik
      initialValues={{
        email: "",
        name: "",
        password: "",
        confirmPassword: "",
        acceptTerms: false,
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
            <View style={styles.form}>
              <AppText
                style={styles.title}
                text={"Crear una cuenta"}
                fontStyle="Regular"
              />
              <TextInput
                placeholder="Ingrese su email"
                label={"Email"}
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
                autoCapitalize="none"
                autoCompleteType="email"
                keyboardType="email-address"
                keyboardAppearance="dark"
                returnKeyType="next"
                returnKeyLabel="next"
              />
              {errors.email && touched.email && (
                <AppText
                  text={errors.email}
                  fontStyle="Regular"
                  style={styles.errorText}
                />
              )}

              <TextInput
                placeholder="Ingrese su nombre"
                label={"Nombre"}
                onChangeText={handleChange("name")}
                onBlur={handleBlur("name")}
                value={values.name}
                keyboardAppearance="dark"
                returnKeyType="next"
                returnKeyLabel="next"
              />
              {errors.name && touched.name && (
                <AppText
                  text={errors.name}
                  fontStyle="Regular"
                  style={styles.errorText}
                />
              )}

              <SecureTextInput
                placeholder="Ingrese su contraseña"
                label={"Contraseña"}
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                value={values.password}
                autoCompleteType="password"
                autoCapitalize="none"
                keyboardAppearance="dark"
                returnKeyType="go"
                returnKeyLabel="go"
              />
              {errors.password && touched.password && (
                <AppText
                  text={errors.password}
                  fontStyle="Regular"
                  style={styles.errorText}
                />
              )}
              <SecureTextInput
                placeholder="Confirme su contraseña"
                label={"Confirme Contraseña"}
                onChangeText={handleChange("confirmPassword")}
                onBlur={handleBlur("confirmPassword")}
                value={values.confirmPassword}
                autoCompleteType="password"
                autoCapitalize="none"
                keyboardAppearance="dark"
                returnKeyType="go"
                returnKeyLabel="go"
              />
              {errors.confirmPassword && touched.confirmPassword && (
                <AppText
                  text={errors.confirmPassword}
                  fontStyle="Regular"
                  style={styles.errorText}
                />
              )}

              <View style={{ marginTop: hp(1.5), width: wp(60) }}>
                <BouncyCheckbox
                  isChecked={values.acceptTerms}
                  size={20}
                  fillColor={theme.colors.primary}
                  unfillColor="#FFFFFF"
                  text="Acepto los terminos del servicio y póliza de seguridad"
                  iconStyle={{ borderColor: theme.colors.primary }}
                  textStyle={[
                    styles.checkBoxText,
                    { /* fontFamily: "Main", */ textDecorationLine: "none" },
                  ]}
                  onPress={() => {
                    setFieldValue("acceptTerms", !values.acceptTerms);
                  }}
                />
                {errors.acceptTerms && touched.acceptTerms && (
                  <AppText
                    text={errors.acceptTerms}
                    fontStyle="Regular"
                    style={styles.errorText}
                  />
                )}
              </View>
            </View>
            <Button
              style={styles.button}
              label={"Continuar"}
              onPress={handleSubmit}
            />
            <View style={styles.row}>
              <AppText
                style={styles.forgetText}
                text={"¿Tiene una cuenta?"}
                fontStyle="Regular"
              />
              <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                <AppText
                  style={styles.accountCreate}
                  text={"Iniciar Sesion"}
                  fontStyle="Regular"
                />
              </TouchableOpacity>
            </View>
          </View>
        </Container>
      )}
    </Formik>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: hp(5),
  },
  form: {
    width: wp(75),
    marginBottom: hp(3),
  },
  logo: {
    width: wp(60),
    height: hp(24),
    marginBottom: hp(2),
    resizeMode: "contain",
  },
  title: {
    textAlign: "left",
    fontSize: hp(4),
    marginBottom: hp(2),
  },
  subtitle: {
    fontSize: 15,
    color: "gray",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: hp(2),
    width: wp(60),
  },
  button: {
    marginBottom: hp(2),
    height: hp(6),
    justifyContent: "center",
  },
  forgetText: {
    color: theme.colors.secondary,
    fontSize: hp(2),
  },
  accountCreate: {
    color: theme.colors.primary,
    fontSize: hp(2),
  },
  checkBoxText: {
    color: "gray",
    fontSize: hp(1.5),
  },
  errorText: {
    color: "red",
    fontSize: hp(1.5),
  },
});
