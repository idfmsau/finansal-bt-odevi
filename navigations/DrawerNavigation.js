import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

// Screen imports
import ProfileScreen from "../screens/ProfileScreen";
import RandomScreen from "../screens/RandomScreen";
import MovieListScreen from "../screens/MovieListScreen";
// Screen imports ending

const Drawer = createDrawerNavigator();

const DrawerNavigation = ({ navigation }) => {
  return (
    <Drawer.Navigator initialRouteName="Profile">
      <Drawer.Screen
        name="profileScreen"
        component={ProfileScreen}
        options={{
          drawerLabel: "Profilim",
        }}
      />
      <Drawer.Screen
        name="randomScreen"
        component={RandomScreen}
        options={{
          drawerLabel: "Rastgele!",
        }}
      />
      <Drawer.Screen
        name="movieListScreen"
        component={MovieListScreen}
        options={{
          drawerLabel: "Ana Sayfa",
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
