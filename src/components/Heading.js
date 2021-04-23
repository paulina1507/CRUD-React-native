import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export function Heading({content, style, props}) {
  return <Text {...props} style={[style, styles.Text]}>{content}</Text>
}

const styles = StyleSheet.create({
  Text: {
    fontSize: 32,
    textAlign: 'center',
    padding: 8,
    fontWeight: "bold"
  },
  
});