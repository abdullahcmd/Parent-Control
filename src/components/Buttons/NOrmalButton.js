import React from 'react';
import { View, StyleSheet,TouchableOpacity,Text,Dimensions } from 'react-native';
import AppColors from '../../constants/colors&Theme/colors';

const { width, height } = Dimensions.get("window");
const NormalButton = ({texxt}) => {
  return (
    <TouchableOpacity style={styles.buttonStyle}>
      
        <Text style={styles.text}>{texxt}</Text>
     
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
    buttonStyle: {
        
        marginLeft: width * 0.05,
        marginRight: width * 0.05,
        height:height*0.05,
        borderRadius: 10,
        backgroundColor:'white',
        justifyContent:'center'
        
      },
      text: {
        fontSize: 15.28,
        color:AppColors.gradientColor1,
        textAlign: "center",

      },
   
});

export default NormalButton;