import React, { useState } from "react";
import { StyleSheet, View, TextInput, TouchableOpacity } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { Picker } from "@react-native-picker/picker";
import { theme } from "../../../theme";
import Container from "../../../Components/Container";
import Title from "../../../Components/Title";
import Text from "../../../Components/NormalText";
import MyTextInput from "../../../Components/TextInput.js";
import SecureTextInput from "../../../Components/SecureTextInput";
import Button from "../../../Components/Button";
import MyText from "../../../Components/MyText";
const Data0 = ({ navigation }) => {
  const [number, onChangeNumber] = useState("");
  const [selectedRoute, setSelectedRoute] = useState();
  const [selectedDocument, setSelectedDocument] = useState();
  const [selectedConst, setSelectedConst] = useState();
  return (
    <Container>
      <View style={styles.container}>
        <View style={styles.content}>
          <View style={styles.title_box}>
            <View style={styles.title_align}>
              <MyText
                style={styles.title}
                text={"Ingreso de datos"}
                fontStyle="Regular"
              />
              <MyText
                style={{ fontSize: 22 }}
                text={"1/3"}
                fontStyle="Regular"
              />
            </View>
            <View style={{ flex: 1, justifyContent: "flex-end" }}>
              <MyText
                style={styles.subtitle}
                text={"Ingrese sus datos para poder continuar."}
                fontStyle="Regular"
              />
            </View>
          </View>

          <View style={styles.form_box}>
            <View style={styles.input_box}>
              <MyText
                style={styles.inputLabel}
                text={"N° de vacas"}
                fontStyle="Regular"
              />
              <TextInput
                style={styles.input}
                placeholder="Ingrese el número de vacas"
                onChangeText={onChangeNumber}
                value={number}
                keyboardType="numeric"
                placeholderTextColor={"grey"}
              />
            </View>

            <View style={styles.input_box}>
              <MyText
                style={styles.inputLabel}
                text={"Ruta"}
                fontStyle="Regular"
              />
              <Picker
                selectedValue={selectedRoute}
                onValueChange={(itemValue, itemIndex) =>
                  setSelectedRoute(itemValue)
                }
              >
                <Picker.Item
                  label="Ingrese la ruta"
                  enabled={false}
                  color="grey"
                />
                <Picker.Item label="De ruta" value="dni" color="black" />
                <Picker.Item
                  label="De rutinni"
                  value="pasaporte"
                  color="black"
                />
              </Picker>
            </View>

            <View style={styles.input_box}>
              <MyText
                style={styles.inputLabel}
                text={"Tipo de documento"}
                fontStyle="Regular"
              />
              <Picker
                selectedValue={selectedDocument}
                onValueChange={(itemValue, itemIndex) =>
                  setSelectedDocument(itemValue)
                }
              >
                <Picker.Item
                  label="Ingrese el tipo de documento"
                  enabled={false}
                  color="grey"
                />
                <Picker.Item label="DNI" value="dni" color="black" />
                <Picker.Item
                  label="Pasaporte"
                  value="pasaporte"
                  color="black"
                />
              </Picker>
            </View>

            <View style={styles.input_box}>
              <MyText
                style={styles.inputLabel}
                text={"Tipo de construcción"}
                fontStyle="Regular"
              />
              <Picker
                selectedValue={selectedConst}
                onValueChange={(itemValue, itemIndex) =>
                  setSelectedConst(itemValue)
                }
              >
                <Picker.Item
                  label="Ingrese el tipo de construcción"
                  enabled={false}
                  color="grey"
                />
                <Picker.Item label="Granja" value="dni" color="black" />
                <Picker.Item label="Rancho" value="pasaporte" color="black" />
              </Picker>
            </View>
          </View>

          <View style={styles.btn_box}>
            <TouchableOpacity onPress={() => navigation.navigate("Register")}>
              <Button style={styles.button} label={"Continuar"} onPress />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Container>
  );
};

export default Data0;

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
    flex: 4,
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
});

/* const style = StyleSheet.create({
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
  button: {
    marginBottom: hp(5),
  },
  forgetText: {
    color: theme.colors.secondary,
  },
  accountCreate: {
    color: theme.colors.primary,
  },
}); */
