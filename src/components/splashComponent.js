import React from "react";
import { View, StyleSheet, ImageBackground, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");
const SplashComponent = ({ children }) => {
  return (
    <View style={styles.cont}>
      <ImageBackground
        source={require("../assets/splash/Splash_Screen.png")}
        style={styles.ImageBackground}
      >
        {children}
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

export default SplashComponent;
