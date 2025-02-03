import React from 'react';
import { View, StyleSheet } from 'react-native';
import SignInComp from "../../components/LoginComponent/SignIn"
const SignUpScreen = () => {
  return (
    <SignInComp></SignInComp>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SignUpScreen;