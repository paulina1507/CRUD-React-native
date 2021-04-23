import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import {Heading} from '../components/Heading'; 
import {Input} from '../components/Input';
import {Button} from '../components/Button';
import {TextButton} from '../components/TextButton';
import {IconButton} from '../components/IconButton';

import {AuthContext} from '../contexts/AuthContext';

export function RegistrationScreen({navigation}) {

  const { register } = React.useContext (AuthContext);
  const [tipo, setTipo] = React.useState('');
  const [estilo, setEstilo] = React.useState('');
  const [pais, setPais] = React.useState('');
  const [marca, setMarca] = React.useState('');
  const [precio, setPrecio] = React.useState('');

  return (
    <View style={styles.container}>
    <IconButton 
    name="arrow-back-circle-outline" 
    size={36} 
    color={'red'} 
    style={styles.icon} 
    onPress= {() => { navigation.pop();
    }} 
    />
    <Heading 
    content='Nuevo registro'
    style={styles.heading}
    />
    <Input 
    style={styles.input} 
    placeholder={'Tipo'} 
    value={tipo}
    onChangeText = {setTipo}
    />
    <Input 
    style={styles.input} 
    placeholder={'Estilo'} 
    value={estilo}
    onChangeText = {setEstilo}
    />
    <Input 
    style={styles.input} 
    placeholder={'País'} 
    value={pais}
    onChangeText = {setPais}
    />
    <Input 
    style={styles.input} 
    placeholder={'Marca'} 
    value={marca}
    onChangeText = {setMarca}
    />
    <Input 
    style={styles.input} 
    placeholder={'Precio'} 
    value={precio}
    onChangeText = {setPrecio}
    />
    <Button text='Crear producto' style={styles.button} onPress={() => {
        register(tipo, estilo, pais, marca, precio);
      }}  /> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 0,
  },
  input:{
    marginVertical: 10
  },
  button:{
    marginVertical: 20
  },
  heading:{
    marginBottom: 20
  },
  icon:{
    position: 'absolute',
    top: 30,
    right: 20,
  }
  
});