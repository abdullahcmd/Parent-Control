import React from 'react';
import { View, StyleSheet, ImageBackground,Text, Dimensions } from 'react-native';

const {width, height } = Dimensions.get('window')
const SplashComponent = ({children}) => {
  return (
    <View style={styles.container}>
        <ImageBackground source ={require('../assets/splash/Splash_Screen.png')} style={styles.ImageBackground}>
        {children}
        </ImageBackground>
       
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor:'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  ImageBackground:{
    flex:1,
    width:width,
    height: height,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default SplashComponent;