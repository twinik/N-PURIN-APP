import React, { useContext } from "react";
import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import AppContext from "../../Context/AppContext";
import { theme } from "../../theme";
import Container from "../../Components/Container";
import TextInput from "../../Components/TextInput.js";
import SecureTextInput from "../../Components/SecureTextInput";
import Button from "../../Components/Button";
import AppText from "../../Components/AppText";
import { Formik } from "formik";
import * as Yup from "yup";

const validations = Yup.object().shape({
  email: Yup.string().required("El email es requerido").label("Email"),
  password: Yup.string()
    .required("La contraseña es requerida")
    .label("Contraseña"),
});

const Login = ({ navigation, route }) => {
  const { SignIn } = useContext(AppContext);

  const handleSubmit = async ({ password, email }) => {
    try {
      await SignIn(email, password);
    } catch (error) {
      alert(error.message);
    }
  };

  const formValues = [
    {
      name: "email",
      type: "email",
      label: "Email",
      placeholder: "Ingrese su email",
      keyboardType: "email-address",
      autoCapitalize: "none",
      autoCorrect: false,
      autoCompleteType: "email",
    },
    {
      name: "password",
      type: "password",
      label: "Contraseña",
      placeholder: "Ingrese su contraseña",
      secureTextEntry: true,
      autoCapitalize: "none",
      autoCorrect: false,
      autoCompleteType: "password",
    },
    {
      name: "confirmPassword",
      type: "password",
      label: "Confirmar contraseña",
      placeholder: "Confirme su contraseña",
      secureTextEntry: true,
      autoCapitalize: "none",
      autoCorrect: false,
      autoCompleteType: "password",
    },
  ];

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
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
            <Image
              style={styles.logo}
              source={require("../../../assets/logo.png")}
            />
            <View style={styles.form}>
              <AppText
                style={styles.title}
                text={"iniciar sesión"}
                fontStyle="Regular"
              />
              <AppText
                style={styles.subtitle}
                text={"Ingrese sus credenciales para poder iniciar sesion"}
                fontStyle="Regular"
              />
              {/* {formValues.map((item, index) =>
                item.type === "email" ? (
                  <TextInput
                    key={index}
                    placeholder={item.placeholder}
                    label={item.label}
                    onChangeText={handleChange(item.name)}
                    onBlur={handleBlur(item.name)}
                    value={values[item.name]}
                    autoCapitalize={item.autoCapitalize}
                    autoCorrect={item.autoCorrect}
                    autoCompleteType={item.autoCompleteType}
                    keyboardType={item.keyboardType}
                    keyboardAppearance="dark"
                    returnKeyType="next"
                    returnKeyLabel="next"
                  />
                ) : (
                  <SecureTextInput
                    key={index}
                    placeholder={item.placeholder}
                    label={item.label}
                    onChangeText={handleChange(item.name)}
                    onBlur={handleBlur(item.name)}
                    value={values[item.name]}
                    autoCapitalize={item.autoCapitalize}
                    autoCorrect={item.autoCorrect}
                    autoCompleteType={item.autoCompleteType}
                    keyboardType={item.keyboardType}
                    keyboardAppearance="dark"
                    returnKeyType="next"
                    returnKeyLabel="next"
                  />
                )
              )} */}
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
            </View>
            <Button
              style={styles.button}
              label={"Iniciar Sesión"}
              onPress={handleSubmit}
            />
            <View style={styles.row}>
              <AppText
                style={styles.forgetText}
                text={"Olvide mi contraseña"}
                fontStyle="Regular"
              />
              <TouchableOpacity onPress={() => navigation.navigate("Register")}>
                <AppText
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
