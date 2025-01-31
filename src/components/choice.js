import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import GirlSvg from "./Girl";
import ChoiceButton from "./Buttons/button";
import NormalButton from "./Buttons/NOrmalButton";

const { width, height } = Dimensions.get("window");
const Choice = () => {
  return (
    <View style={styles.wholeContainer}>
      <GirlSvg></GirlSvg>
      <ChoiceButton texxt={"I'm a Parent"}></ChoiceButton>
      <View style = {styles.but}>
      <NormalButton texxt={"I'm a Kid"}></NormalButton>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  kidStyle: {
    marginTop: height * 0.01,
  },
  wholeContainer: {
    justifyContent: "center",
  },but:{
    marginTop:height*0.01
  }
});

export default Choice;
