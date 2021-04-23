import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';

import {HomeScreen} from '../screens/HomeScreen';
import {RegistrationScreen} from '../screens/RegistrationScreen';
import {ProductListScreen} from '../screens/ProductListScreen';
import {ProductDetailScreen} from '../screens/ProductDetailScreen';

const AuthStack = createStackNavigator();

export function AuthStackNavigator() {
  return(
      <AuthStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      >
        <AuthStack.Screen name={'Home'} component={HomeScreen}/> 
        <AuthStack.Screen name={'Registration'} component={RegistrationScreen}/>
        <AuthStack.Screen name={'ProductList'} component={ProductListScreen}/>
        <AuthStack.Screen name={'ProductDetail'} component={ProductDetailScreen}/>
      </AuthStack.Navigator>
  );
}