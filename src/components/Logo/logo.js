import React from 'react';
import { View, StyleSheet,Image } from 'react-native';

const Logo = () => {
  return (
   <Image source={require('../../assets/logo/Logo.png')}></Image>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Logo;