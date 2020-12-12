import React from "react";
import { Button, View } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import ProfileScreen from '../screens/ProfileScreen'
import LoginScreen from '../screens/LoginScreen'

const Drawer = createDrawerNavigator();

const DrawerNavigation = ({navigation}) => {
  return (
      <Drawer.Navigator initialRouteName="Profile">
        <Drawer.Screen name="Profilim" component={ProfileScreen} />
        <Drawer.Screen name="Çıkış Yap" component={LoginScreen} />
        {/* Buraya normalde logout mekanizması gelecek, isLoggedIn false yapılacak */}
      </Drawer.Navigator>
  );
};

export default DrawerNavigation;
