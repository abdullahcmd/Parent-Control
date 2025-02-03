import React from 'react';
import { View,Text, StyleSheet } from 'react-native';

const Heading = ({content, style}) => {
  return (
    <Text style={[styles.container, style]}>{content}</Text>
  );
};

const styles = StyleSheet.create({
  container: {
   fontSize:17.47,
   fontWeight:600,

  },
});

export default Heading;