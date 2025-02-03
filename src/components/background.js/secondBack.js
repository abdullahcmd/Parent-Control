import React from "react";
import { View, StyleSheet, ImageBackground, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");
const NewBack = ({ children }) => {

  console.log(children)
  return (
    <View style={styles.cont}>
      <ImageBackground
        source={require("../../assets/splash/Choose_Login.png")}
        style={styles.ImageBackground}
      >
        { children }
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  ImageBackground: {
    width: width,
    height: height,
    justifyContent: "center",
    alignItems: "center",
  },
  cont: {
    flex: 1,
  },
});

export default NewBack;