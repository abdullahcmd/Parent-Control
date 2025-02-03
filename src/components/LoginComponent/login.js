import React from "react";
import { View, StyleSheet, Text, TextInput, Linking } from "react-native";
import { height, width } from "../../constants/Dimensions/Dimensions";
import Heading from "../TextCOmponents/TextHead";
import ChoiceButton from "../Buttons/button";
import GOOgle from "../googleSignIn/signWIthGoogle";

const LoginComp = () => {
  return (
    <View style={styles.container}>
      <Heading content={"Login"} style={styles.Login} />
      <View style={styles.divider} />
      <Heading content={"Email"} style={styles.secondHeading} />
      <TextInput
        placeholder="Enter Your email"
        style={styles.INputStyle}
        place
      />
      <Heading content={"Password"} style={styles.ThirdHead} />
      <TextInput
        placeholder="Enter Your password"
        style={styles.INputStyle}
        place
      />
      <Heading content={"Forgot Password?"} style={styles.forgetPass} />
      <ChoiceButton texxt={"Login"} style={{ marginTop: height * 0.02 }} />
      <View style={styles.row}>
        <View style={styles.rowlines} /> <View style={styles.marginBox} />
        <Heading content={"or continue with"} style={{ fontWeight: 400 }} />
        <View style={styles.marginBox} />
        <View style={styles.rowlines} />
      </View>
      <GOOgle></GOOgle>
      <View style={styles.textCOntainer}>
      <Text style={styles.normalText}>
      Don't have an account?{" "}
        <Text
          style={styles.linkText}
          onPress={() => Linking.openURL("https://www.terms.com")}
        >
          Sign Up
        </Text>{" "}
        now.
      </Text>
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: height * 0.63,
    backgroundColor: "white",
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    position: "absolute",
    bottom: 0,
  },
  Login: {
    textAlign: "center",
    marginTop: height * 0.02,
  },
  divider: {
    width: width * 0.9,
    alignSelf: "center",
    backgroundColor: "#DAE3E9",
    height: height * 0.001,
    marginTop: height * 0.02,
  },
  secondHeading: {
    marginTop: height * 0.03,
    marginLeft: width * 0.05,
  },
  INputStyle: {
    borderWidth: 2,
    width: width * 0.9,
    alignSelf: "center",
    includeFontPadding:true,
    paddingLeft:width*0.03,
    marginTop: height * 0.01,
    borderRadius: 8,
    borderColor: "#DAE3E9",
  },
  ThirdHead: {
    marginTop: height * 0.02,
    marginLeft: width * 0.05,
  },
  forgetPass: {
    color: "#3483F8",
    fontSize: 10,
    textAlign: "right",
    fontWeight: 400,
    marginRight: width * 0.05,
    marginTop: height * 0.005,
  },
  row: {
    flexDirection: "row",
    marginTop: height * 0.02,
    width: width * 0.9,
    height: height * 0.03,
    alignSelf: "center",
    alignItems: "center",
  },
  rowlines: {
    width: "29%",
    backgroundColor: "black",
    height: height * 0.0015,
  },
  marginBox: {
    margin: width * 0.02,
  },
  normalText: {
    fontSize: 14,
    color: "#29384E",
   // textAlign:'center',
  },
  linkText: {
    color: "#007BFF", // Change color to blue (or any other color)
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
  textCOntainer:{
    marginTop:height*0.02,
   alignSelf:'center'
  },
});

export default LoginComp;
