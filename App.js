import { StatusBar } from 'expo-status-bar';
import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider} from '@ui-kitten/components';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen'
import SignupScreen from './screens/SignupScreen';
import MovieListScreen from './screens/MovieListScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
       <NavigationContainer>
          <Stack.Navigator>
          <Stack.Screen name="MovieListScreen" component={ MovieListScreen } />
            {/* <Stack.Screen name="LoginScreen" component={ LoginScreen } />
            <Stack.Screen name="SignupScreen" component={ SignupScreen } /> */}
          </Stack.Navigator>
        </NavigationContainer>
    </ApplicationProvider>
  );
}
