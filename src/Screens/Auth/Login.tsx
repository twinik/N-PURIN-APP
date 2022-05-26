import React, { useEffect } from "react";
import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { theme } from "../../theme";
import Container from "../../Components/Container";
import TextInput from "../../Components/TextInput.js";
import SecureTextInput from "../../Components/SecureTextInput";
import Button from "../../Components/Button";
import MyText from "../../Components/MyText";
import { Formik } from "formik";
import * as Yup from "yup";

const validations = Yup.object().shape({
  email: Yup.string().required("El email es requerido").label("Email"),
  password: Yup.string()
    .required("La contraseña es requerida")
    .label("Contraseña"),
});

const Login = ({ navigation, route }) => {
  /* if (route.params.email != null && route.params.password != null) {
    const { email, password } = route.params;
  } */

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      onSubmit={(values) => {
        alert("LogIn Success");
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
            <Image
              style={styles.logo}
              source={require("../../../assets/logo.png")}
            />
            <View style={styles.form}>
              <MyText
                style={styles.title}
                text={"iniciar sesión"}
                fontStyle="Regular"
              />
              <MyText
                style={styles.subtitle}
                text={"Ingrese sus credenciales para poder iniciar sesion"}
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
                <MyText
                  text={errors.email}
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
                <MyText
                  text={errors.password}
                  fontStyle="Regular"
                  style={styles.errorText}
                />
              )}
            </View>
            <Button
              style={styles.button}
              label={"Iniciar Sesión"}
              onPress={handleSubmit}
            />
            <View style={styles.row}>
              <MyText
                style={styles.forgetText}
                text={"Olvide mi contraseña"}
                fontStyle="Regular"
              />
              <TouchableOpacity onPress={() => navigation.navigate("Register")}>
                <MyText
                  style={styles.accountCreate}
                  text={"Crear una cuenta"}
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

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  form: {
    width: wp(70),
    height: hp(40),
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
  },
  subtitle: {
    fontSize: 15,
    color: "gray",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: hp(2),
    width: wp(60),
  },
  button: {
    marginBottom: hp(5),
    height: hp(6),
    justifyContent: "center",
  },
  forgetText: {
    color: theme.colors.secondary,
  },
  accountCreate: {
    color: theme.colors.primary,
  },
  errorText: {
    color: "red",
    fontSize: hp(1.5),
  },
});
