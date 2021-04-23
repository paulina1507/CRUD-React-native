import * as React from 'react';
import { StyleSheet, TextInput } from 'react-native';

export function Input({style, ...props}) {
  return <TextInput {...props} style={[style, styles.input]}/>
}

const styles = StyleSheet.create({
   input: {
    borderRadius: 10,
    borderColor: '#5d58d7',
    borderWidth: 2,
    padding: 18,
    width: '90%',
  },
  
});