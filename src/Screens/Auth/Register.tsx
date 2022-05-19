import React, { useEffect } from "react";
import { StyleSheet, View, Image } from "react-native";
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
const Login = () => {
  return (
    <Container>
      <View style={styles.container}>
        <Image
          style={styles.logo}
          source={require("../../../assets/logo.png")}
        />
        <View style={styles.form}>
          <Title style={styles.title}>Iniciar Sesion</Title>
          <Text>Ingrese sus credenciales para poder iniciar sesion</Text>
          <TextInput placeholder="Ingrese el email" label={"Email"} />
          <SecureTextInput
            placeholder="Ingrese la contrasena"
            label={"Contrasena"}
          />
        </View>
        <Button style={styles.button} label={"Iniciar Sesion"} />
        <View style={styles.row}>
          <Text style={styles.forgetText}>Olvide mi contrasena</Text>
          <Text style={styles.accountCreate}>Crear una cuenta</Text>
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
    width: wp(63),
    height: hp(24),
    marginBottom: hp(2),
  },
  title: {
    textAlign: "left",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: hp(2),
    width: wp(60),
  },
  button:{
    marginBottom: hp(5),
  },
  forgetText: {
    color: theme.colors.secondary,
  },
  accountCreate: {
    color: theme.colors.primary,
  },
});
