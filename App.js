import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen'
import SignupScreen from './screens/SignupScreen';
import MovieListScreen from '/screens/MovieListScreen';
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="LoginScreen" component={ LoginScreen } />
        <Stack.Screen name="SignupScreen" component={ SignupScreen } />
        <Stack.Screen name="MovieListScreen" component={ MovieListScreen } />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
