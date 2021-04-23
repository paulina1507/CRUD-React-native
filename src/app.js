import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {AuthStackNavigator} from './navigators/AuthStackNavigator';
import {AuthContext} from './contexts/AuthContext';
import firebase from './database/firebase';

const RootStack = createStackNavigator();

export default function () {
 const auth = React.useMemo( () => ({
      register: async(tipo, estilo, pais, marca, precio) => {
      alert('Registrado: '+ tipo +', '+ estilo + ', ' + pais + ', ' + marca + ', ' + precio);
      await firebase.db.collection('product').add({
        tipo: tipo, 
        estilo: estilo, 
        pais: pais,
        marca: marca, 
        precio: precio
      })
    },
  }),
    [],
  );

  return(
    <AuthContext.Provider value={auth}>
    <NavigationContainer>
      <RootStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      >
        <RootStack.Screen name={'AuthStack'} component={AuthStackNavigator}/>
      </RootStack.Navigator>
    </NavigationContainer>
    </AuthContext.Provider>
  );
}