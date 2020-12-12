import React, { useState } from "react";
import * as eva from "@eva-design/eva";
import { ApplicationProvider } from "@ui-kitten/components";
import AuthenticatedNavigation from "./navigations/AuthenticatedNavigation";
import NonAuthenticatedNavigation from "./navigations/NonAuthenticatedNavigation";
import * as firebase from "firebase";
import apiKey from "./config/keys";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  if (!firebase.apps.length) {
    firebase.initializeApp({});
  } else {
    firebase.app();
  }

  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <NavigationContainer>
        {isLoggedIn ? (
          <>
            <AuthenticatedNavigation />
          </>
        ) : (
          <NonAuthenticatedNavigation />
        )}
      </NavigationContainer>
    </ApplicationProvider>
  );
}
