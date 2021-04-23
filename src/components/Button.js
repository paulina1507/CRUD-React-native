import * as React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

export function Button({style, text, onPress}) {
  return (
    <TouchableOpacity style={[style, styles.button]} onPress={onPress}>
    <Text style={styles.text} >{text.toUpperCase()}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#7a1dfd',
    width: '90%',
    padding: 18,
    borderRadius: 10,
    fontWeight: "bold",
    marginBottom:10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: "bold"
  }
  
});