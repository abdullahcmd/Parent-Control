import React from "react";
import  { useRef, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Linking,
  TouchableOpacity,
} from "react-native";
import { height, width } from "../../constants/Dimensions/Dimensions";
import Heading from "../../components/TextCOmponents/TextHead";
import ChoiceButton from "../../components/Buttons/button";
import Icon from "../../assets/icons/Icon.svg"


const ForgetPass3 = () => {

  



  return (
    <View style={styles.container}>
      <Heading content={"Forget Password"} style={styles.Login} />
      <View style={styles.divider} />

      <View style={styles.textCOntainer}>
        <Icon style={styles.iconStyle}/>
        <Text style={styles.normalText}>
          Password Reset Successfully.
        </Text>
      </View>

      <ChoiceButton texxt={"Submit"} style={{ marginTop: height * 0.02 }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: height * 0.4,
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
    includeFontPadding: true,
    paddingLeft: width * 0.03,
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
    textAlign: "center",
  },
  linkText: {
    color: "#29384E", // Change color to blue (or any other color)
    fontWeight: "900",
  },
  textCOntainer: {
    width: width * 0.9,
    marginTop: height * 0.02,
    alignSelf: "center",
  },
  otpContainer: {
    width: width * 0.8,
    gap:width*0.02,
    marginTop:height*0.02,
    alignSelf:'center',
    flexDirection:'row'
    //backgroundColor:'black'
  },
  otpBox: {
    borderColor: "#DAE3E9",
    height: height * 0.07,
    borderWidth: 2,
    width: width * 0.14,
    borderRadius:20,
  },
  otpInput:{
    marginTop:height*0.008,
    borderBottomColor:"#868C95",
    borderBottomWidth:3,
    width:width*0.035,
    alignSelf:'center'
  },
  iconStyle:{
    alignSelf:'center'
  }
});

export default ForgetPass3;
