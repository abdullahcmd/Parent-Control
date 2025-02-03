import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import AppColors from "../../constants/colors&Theme/colors";
import { LinearGradient } from "expo-linear-gradient";

const { width, height } = Dimensions.get("window");

const ChoiceButton = ({texxt,style}) => {
  return (
    <TouchableOpacity style={[styles.buttonStyle,style]}>
      <LinearGradient
        colors={[AppColors.gradientColor1, AppColors.gradientColor2]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.gradientSTyle}
      >
        <Text style={styles.text}>{texxt}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    
    marginLeft: width * 0.05,
    marginRight: width * 0.05,
    borderRadius: 20,
    
  },
  text: {
    fontSize: 15.28,
    color:AppColors.text,
    textAlign: "center",
  },
  gradientSTyle:{
    borderRadius:6,
    justifyContent:'center',
    height:height*0.05
  }
});

export default ChoiceButton;
