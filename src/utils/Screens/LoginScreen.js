import React from 'react';
import { View, StyleSheet } from 'react-native';
import LoginComp from "../../components/LoginComponent/login"
const LoginScreen = () => {
  return (
    <LoginComp></LoginComp>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LoginScreen;