import React from "react";
import { View, Linking, StyleSheet, Image } from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import AppContext from "../Context/AppContext";
import { AntDesign } from "@expo/vector-icons";
import { theme } from "../theme";
import AppText from "./AppText";

export default function CustomDrawerContent(props) {
  //const { User, SignOut } = React.useContext(AppContext);
  const filteredProps = {
    ...props,
    state: {
      ...props.state,
      routeNames: props.state.routeNames.filter(
        // To hide single option
        // (routeName) => routeName !== 'HiddenPage1',
        // To hide multiple options you can add & condition
        (routeName) => {
          routeName !== "Buscador" && routeName !== "EditProfile";
        }
      ),
      routes: props.state.routes.filter(
        (route) => route.name !== "Buscador" && route.name !== "EditProfile"
      ),
    },
  };
  return (
    <DrawerContentScrollView {...props} style={styles.container}>
      <AntDesign
        name="close"
        size={30}
        color="red"
        style={styles.close}
        onPress={() => {
          props.navigation.closeDrawer();
        }}
      />
      <View style={styles.header}>
        <View style={styles.containerImg}>
          <Image
            style={styles.imgPerfil}
            source={{
              uri: "https://miro.medium.com/max/785/0*Ggt-XwliwAO6QURi.jpg",
            }}
          />
        </View>
        <View style={styles.containerText}>
          <AppText style={styles.userName} text="N-Purin" />
          <AppText style={styles.email} text="aproschle.cl@conectamilk.cl" />
        </View>
      </View>
      <DrawerItemList {...filteredProps} />
      <DrawerItem
        label="Logout"
        onPress={() => {
          alert("Logout");
        }}
      />
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.blue,
  },
  header: {
    flex: 1,
    alignItems: "center",
    marginTop: hp(5),
    marginBottom: hp(15),
  },
  imgPerfil: {
    backgroundColor: "#E5E5E5",
    borderRadius: 50,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
    width: 100,
    height: 100,
  },
  containerImg: {
    flex: 1,
    justifyContent: "center",
    marginBottom: hp(2),
  },
  containerText: {
    flex: 1,
    alignItems: "center",
  },
  userName: {
    fontSize: 26,
    color: "white",
  },
  email: {
    fontSize: 16,
    color: "lightgray",
  },
  close: {
    margin: wp(5),
  },
});
