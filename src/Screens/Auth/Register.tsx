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
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { useFonts } from "expo-font";
const Login = ({ navigation }) => {
  const [loaded] = useFonts({
    Main: require("./../../../assets/fonts/Staatliches.ttf"),
  });
  if (!loaded) {
    return null;
  }
  return (
    <Container>
      <View style={styles.container}>
        <View style={styles.form}>
          <MyText
            style={styles.title}
            text={"Crear una cuenta"}
            fontStyle="Regular"
          />
          <TextInput placeholder="Ingrese el Email" label={"Email"} />
          <SecureTextInput
            placeholder="Ingrese la contraseña"
            label={"Contraseña"}
          />
          <SecureTextInput
            placeholder="Confirme la contraseña"
            label={"Contraseña"}
          />
          <View style={{ marginTop: hp(1.5), width: wp(70) }}>
            <BouncyCheckbox
              size={25}
              fillColor={theme.colors.primary}
              unfillColor="#FFFFFF"
              text="Acepto los terminos y condiciones establecidos por la ley n°237 de la Republica Argentina"
              iconStyle={{ borderColor: theme.colors.primary }}
              textStyle={[
                styles.checkBoxText,
                { fontFamily: "Main", textDecorationLine: "none" },
              ]}
              onPress={(isChecked: boolean) => {}}
            />
          </View>
        </View>
        <Button
          style={styles.button}
          label={"Continuar"}
          onPress={() => navigation.navigate("Data0")}
        />
        <View style={styles.row}>
          <MyText
            style={styles.forgetText}
            text={"¿Ya tienes una cuenta?"}
            fontStyle="Regular"
          />
          <TouchableOpacity onPress={() => navigation.navigate("Register")}>
            <MyText
              style={styles.accountCreate}
              text={"Iniciar Sesion"}
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
    marginTop: hp(5),
  },
  form: {
    width: wp(80),
    height: hp(47),
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
    fontSize: hp(1.85),
  },
  accountCreate: {
    color: theme.colors.primary,
    fontSize: hp(1.85),
  },
  checkBoxText: {
    color: "gray",
    fontSize: hp(1.5),
  },
});
