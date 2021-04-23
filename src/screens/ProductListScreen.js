import * as React from 'react';
import { useState, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { LinearGradient } from "expo-linear-gradient"; 
import { Heading } from '../components/Heading';
import { TextButton } from '../components/TextButton';
import { IconButton } from '../components/IconButton';
import { ListItem, Avatar} from 'react-native-elements'; 
import { AuthContext } from '../contexts/AuthContext';

import firebase from '../database/firebase';

export function ProductListScreen({ navigation }) {
  const [product, setProducts] = useState([]);

  useEffect(() => {
    firebase.db.collection('product').onSnapshot((querySnapshot) => {
      const productos = [];
      querySnapshot.docs.forEach((doc) => {
        //console.log(doc.data());
        const {tipo, estilo, pais, marca, precio} = doc.data();
        productos.push({
          id: doc.id,
          tipo,
          estilo,
          pais, 
          marca,
          precio
        });
      });
      setProducts(productos);
    })
  }, []);

  return (
    <View style={styles.container}>
    <LinearGradient colors={["#833ab4", "#1df8fd"]} start={[0.1, 0.10]} style={styles.linear} >
      <IconButton
        name="arrow-back-circle-outline"
        size={36}
        color={'red'}
        style={styles.icon}
        onPress={() => {
          navigation.pop();
        }}
      />
      <Heading content="Lista de productos" style={{color: 'white', marginBottom: 20}} />
      {
        product.map(product =>{
          return(
            <ListItem 
              key={product.id}
              bottomDivider
              onPress = {()=> {
                navigation.navigate('ProductDetail', {
                  productId: product.id
                });
              }}
              >
                <Avatar 
                rounded
                source={{uri: 'https://i.pinimg.com/originals/4d/7a/89/4d7a89e63fb96c8f0c88a4cc2d782cf9.png'}}/>
              <ListItem.Content>
                <ListItem.Title>{product.tipo}</ListItem.Title>
                <ListItem.Subtitle>{product.estilo}</ListItem.Subtitle>
                <ListItem.Subtitle>{product.pais}</ListItem.Subtitle>
                <ListItem.Subtitle>{product.marca}</ListItem.Subtitle>
                <ListItem.Subtitle>{product.precio}</ListItem.Subtitle>
              </ListItem.Content>
            </ListItem>
          );
        })
      }
      </LinearGradient >
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 0,
  },
  linear: {
    flex: 1,
    justifyContent: 'center',
    padding: 0,
  },
  icon: {
    position: 'absolute',
    top: 30,
    right: 20,
  },
});