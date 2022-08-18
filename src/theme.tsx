import { Platform } from "react-native";
import { DefaultTheme } from "react-native-paper";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

export const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: "#7936E4",
    secondary: "#9d9eb3",
    black: "#2c3e42",
    gray: "#B6B6B8",
    green: "#38b48c",
  },
  fonts: {
    ...Platform.select({
      ios: {
        Nunito_Regular: "Nunito-Regular",
        Nunito_SemiBold: "Nunito SemiBold",
        Nunito_Bold: "Nunito-Bold",
        Poppins_Medium: "Poppins-Medium",
        Poppins_Regular: "Poppins-Regular",
        Poppins_Bold: "Poppins-SemiBold",
        Barlow_BoldItalic: "BarlowCondensed-BoldItalic",
      },
      android: {
        Nunito_Regular: "Nunito-Regular",
        Nunito_SemiBold: "Nunito-SemiBold",
        Nunito_Bold: "Nunito-Bold",
        Poppins_Medium: "Poppins-Medium",
        Poppins_Regular: "Poppins-Regular",
        Poppins_Bold: "Poppins-SemiBold",
        Barlow_BoldItalic: "BarlowCondensed-BoldItalic",
      },
    }),
  },
  sizes: {
    thirtyFive: wp(11.5),
    thirtyThree: wp(10.7),
    thirtyTwo: wp(10),
    twentyTwo: wp(7),
    twentyOne: wp(6.2),
    twenty: wp(5.7),
    eighteen: wp(5),
    seventeen: wp(4.8),
    fifteen: wp(4.2),
    fourteen: wp(3.8),
    twelve: wp(3.3),
    eleven: wp(3.2),
    ten: wp(3.1),
    nine: wp(3),
    eight: wp(2.6),
    six: wp(2.1),
  },
};
