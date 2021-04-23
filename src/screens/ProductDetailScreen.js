import * as React from 'react';
import { useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import {Heading} from '../components/Heading'; 
import {Input} from '../components/Input';
import {Button} from '../components/Button';
import {TextButton} from '../components/TextButton';
import {IconButton} from '../components/IconButton';

import {AuthContext} from '../contexts/AuthContext';

import firebase from '../database/firebase';

export function ProductDetailScreen({route, navigation}) {

  const id = route.params.productId;
  console.log(id);
  const [tipo, setTipo] = React.useState('');
  const [estilo, setEstilo] = React.useState('');
  const [pais, setPais] = React.useState('');
  const [marca, setMarca] = React.useState('');
  const [precio, setPrecio] = React.useState('');

  const getProductById = async(id)=> {
    const dbRef = firebase.db.collection('product').doc(id);
    const doc = await dbRef.get();
    console.log(doc.data());

    const product = doc.data();
    setTipo(product.tipo);
    setEstilo(product.estilo);
    setPais(product.pais);
    setMarca(product.marca);
    setPrecio(product.precio);
  }
  
  useEffect(()=>{
    getProductById(id);
  }, [])

  const deleteProduct = async(idProduct)=>{
    const dbRef = firebase.db.collection('product').doc(idProduct);
    await dbRef.delete();
    alert('Producto eliminado')
    navigation.navigate('ProductList');
  }

  const updateProduct = async(idProduct)=>{
    const dbRef = firebase.db.collection('product').doc(idProduct);
    await dbRef.set({
      tipo: tipo,
      estilo: estilo,
      pais: pais,
      marca: marca,
      precio: precio
    });
    alert('Datos actualizados')
    navigation.navigate('ProductList');
  }

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
    content='Detalles'
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
    <Button 
    text='Actualizar'
    style={styles.button}
    onPress={()=>{
      updateProduct(id);
    }}
    />
    <TextButton 
    text='Eliminar'
    onPress={()=>{
      deleteProduct(id);
    }}
    />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    padding: 0,
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