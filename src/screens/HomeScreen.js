import * as React from 'react';
import {useState, useEffect, useRef } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import { LinearGradient } from "expo-linear-gradient"; 
import {Heading} from '../components/Heading'; 
import {Input} from '../components/Input';
import {Button} from '../components/Button';
import {TextButton} from '../components/TextButton';
import {AuthContext} from '../contexts/AuthContext';

export function HomeScreen({navigation}) {
  return (
    <View style={styles.container}>
    <LinearGradient colors={["#833ab4", "#1df8fd"]} start={[0.1, 0.10]} style={styles.linear} >
    <Image 
    style={styles.logo}
    source={require('../images/cerveza.png')} />
    </LinearGradient>
    <Heading 
    content='BeerLove'
    style={styles.heading}
    />
    <Button style={styles.button}
    text='Crea un producto' 
    onPress={() => {
      navigation.navigate('Registration');
    }}/>
    <Button style={styles.button}
    text='Productos registrados' 
    onPress={() => {
      navigation.navigate('ProductList');
    }}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  logo:{
    width:100,
    height:100
  }
  
});