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

const ForgetPass2 = () => {

    const otpLength = 5; // Number of OTP fields
    const otpRefs = useRef([]); // Store refs for each TextInput
    const [otp, setOtp] = useState(Array(otpLength).fill("")); // Store OTP values
  
    const handleChange = (text, index) => {
      if (text.length > 1) return; // Ensure only one character is entered
  
      const newOtp = [...otp];
      newOtp[index] = text;
      setOtp(newOtp);
  
      // Move focus to the next field if there is input
      if (text && index < otpLength - 1) {
        otpRefs.current[index + 1].focus();
      }
    };
  
    const handleKeyPress = (e, index) => {
      if (e.nativeEvent.key === "Backspace" && index > 0) {
        otpRefs.current[index - 1].focus(); // Move focus to the previous input on backspace
      }
    };



  return (
    <View style={styles.container}>
      <Heading content={"Forget Password"} style={styles.Login} />
      <View style={styles.divider} />
      <View style={styles.textCOntainer}>
        <Text style={styles.normalText}>
          Check your email at <Text style={styles.linkText}>abc@gmail.com</Text>{" "}
          or a password reset link.
        </Text>
      </View>

      <View style={styles.otpContainer}>
      {otp.map((_, index) => (
        <View key={index} style={styles.otpBox}>
          <TextInput
            ref={(el) => (otpRefs.current[index] = el)} // Assign ref dynamically
            style={styles.otpInput}
            keyboardType="numeric"
            maxLength={1}
            value={otp[index]}
            onChangeText={(text) => handleChange(text, index)}
            onKeyPress={(e) => handleKeyPress(e, index)}
            autoFocus={index === 0} // Auto-focus the first input
          />
        </View>
      ))}
      </View>

      <ChoiceButton texxt={"Submit"} style={{ marginTop: height * 0.02 }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: height * 0.35,
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
  }
});

export default ForgetPass2;
