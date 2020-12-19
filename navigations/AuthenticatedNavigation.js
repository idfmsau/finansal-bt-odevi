import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// Screen imports
import MovieListScreen from "../screens/MovieListScreen";
import RandomScreen from "../screens/RandomScreen";
import DrawerNavigation from "./DrawerNavigation";
// Screen imports ending

import IconHandler from "../utils/IconHandler";

const Tab = createBottomTabNavigator();

const AuthenticatedNavigation = ({ navigation }) => {
  return (
    <Tab.Navigator
      activeColor="#f0edf6"
      inactiveColor="#3e2465"
      initialRouteName="Home"
      barStyle={{ backgroundColor: "#694fad" }}
    >
      <Tab.Screen
        name="homeScreen"
        component={MovieListScreen}
        options={{
          tabBarLabel: "Ana Sayfa",
          tabBarIcon: ({ focused, color, size, name }) =>
            IconHandler(focused, color, size, "home"),
        }}
      />
      <Tab.Screen
        name="randomScreen"
        component={RandomScreen}
        options={{
          tabBarLabel: "Rastgele!",
          tabBarIcon: ({ focused, color, size, name }) =>
            IconHandler(focused, color, size, "dice-3"),
        }}
      />
      <Tab.Screen
        name="profileScreen"
        component={DrawerNavigation}
        options={{
          tabBarLabel: "Profilim",

          tabBarIcon: ({ focused, color, size }) =>
            IconHandler(focused, color, size, "account-heart-outline"),
        }}
      />
    </Tab.Navigator>
  );
};

export default AuthenticatedNavigation;
