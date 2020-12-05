import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Icon } from "@ui-kitten/components";
// Screen imports
import MovieListScreen from "../screens/MovieListScreen";
import ProfileScreen from "../screens/ProfileScreen";
// Screen imports ending
import IconHandler from '../utils/IconHandler'

const Tab = createBottomTabNavigator();


const AuthenticatedNavigation = ({ navigation }) => {
  return (
    <NavigationContainer>
      <Tab.Navigator activeColor="#f0edf6" inactiveColor="#3e2465" initialRouteName="Home" barStyle={{ backgroundColor: '#694fad' }}>
        <Tab.Screen
          name="home"
          component={MovieListScreen}
          options={{
            tabBarLabel: "Ana Sayfa",
            tabBarIcon: ({ focused, color, size, name }) => (
                IconHandler(focused, color, size,  "home")
            ),
          }}
        />
        <Tab.Screen
          name="random"
          component={MovieListScreen}
          options={{
            tabBarLabel: "Rastgele!",
            tabBarIcon: ({ focused, color, size, name }) => (
                IconHandler(focused, color, size, 'dice-3')
            ),
          }}
        />
        <Tab.Screen
          name="Listem"
          component={MovieListScreen}
          options={{
            tabBarLabel: "Listem",
            tabBarIcon: ({ focused, color, size }) => (
                IconHandler(focused, color, size, 'format-list-bulleted')
            ),
          }}
        />
        <Tab.Screen name="ProfileScreen" component={ProfileScreen} options={{
            tabBarLabel: "Profilim",
            tabBarIcon: ({ focused, color, size }) => (
                IconHandler(focused, color, size, 'account-heart-outline')
            ),
          }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AuthenticatedNavigation;
