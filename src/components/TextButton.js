import * as React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

export function TextButton({style, text, onPress}) {
  return (
    <TouchableOpacity style={[style, styles.button]} onPress={onPress}>
    <Text style={styles.text} >{text.toUpperCase()}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 10,
    width: '90%'
  },
  text:{
    textAlign: 'center',
    fontSize: 14,
    color: '#ffffff'
    
  }
  
});