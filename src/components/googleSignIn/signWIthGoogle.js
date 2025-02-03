import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { height, width } from "../../constants/Dimensions/Dimensions";
import Social_Icons from "../../assets/icons/Social_Icons.svg";
const GOOgle = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <Social_Icons style={styles.googleIcon} />
      <Text style={styles.Text}>Sign in with Google</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: height * 0.02,
    height: height * 0.06,
    justifyContent: "space-evenly",
    width: width * 0.56,
    flexDirection: "row",
    elevation: 1,
    alignItems: "center",
    backgroundColor: "white",
    alignSelf: "center",
    borderWidth: 0.2,
    borderRadius: 8,
  },
  googleIcon: {
    // marginLeft:width*0.05
  },
  Text: {
    fontSize: 14.24,
  },
});

export default GOOgle;
