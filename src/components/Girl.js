import React from "react";
import { View, StyleSheet, Image, Dimensions } from "react-native";

const { width, height } = Dimensions.get("screen");
const GirlSvg = () => {
  return (
    <Image
      style={styles.ImageStyle}
      source={require("../assets/girlSvg/image 96.png")}
      resizeMode="contain"
    />
  );
};

const styles = StyleSheet.create({
  ImageStyle: {
    height: height * 0.3,
    width: width * 0.9,
  },
});

export default GirlSvg;
