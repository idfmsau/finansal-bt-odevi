import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

// Screen imports
import LoginScreen from "../screens/LoginScreen";
import SignupScreen from "../screens/SignupScreen";
// Screen imports ending

const Stack = createStackNavigator();

const NonAuthenticatedNavigation = ({ navigation }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="SignupScreen" component={SignupScreen} />
    </Stack.Navigator>
  );
};

export default NonAuthenticatedNavigation;
