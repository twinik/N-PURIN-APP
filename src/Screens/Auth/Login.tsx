import React, { useEffect } from "react";
import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { theme } from "../../theme";
import Container from "../../Components/Container";
import Title from "../../Components/Title";
import Text from "../../Components/NormalText";
import TextInput from "../../Components/TextInput.js";
import SecureTextInput from "../../Components/SecureTextInput";
import Button from "../../Components/Button";
import MyText from "../../Components/MyText";
const Login = ({ navigation }) => {
  return (
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
          <TextInput placeholder="Ingrese el email" label={"Email"} />
          <SecureTextInput
            placeholder="Ingrese la contrasena"
            label={"Contraseña"}
          />
        </View>
        <Button style={styles.button} label={"Iniciar Sesion"} onPress />
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
});
