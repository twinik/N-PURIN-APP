import React from "react";
import { Text } from "react-native";
import { useFonts } from "expo-font";

const AppText = ({ text, fontStyle, style }) => {
  const [loaded] = useFonts({
    Regular: require("../../assets/fonts/Staatliches.ttf"),
  });

  if (!loaded) {
    return <Text>{text}</Text>;
  }

  return (
    <Text
      style={[
        style,
        {
          fontFamily: fontStyle == null ? "Regular" : fontStyle,
        },
      ]}
    >
      {text}
    </Text>
  );
};

export default AppText;
