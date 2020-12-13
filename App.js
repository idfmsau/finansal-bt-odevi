import React, { useState } from "react";
import * as eva from "@eva-design/eva";
import { ApplicationProvider } from "@ui-kitten/components";
import AuthenticatedNavigation from "./navigations/AuthenticatedNavigation";
import NonAuthenticatedNavigation from "./navigations/NonAuthenticatedNavigation";
import * as firebase from "firebase";
import apiKey from "./config/keys";
import { NavigationContainer } from "@react-navigation/native";


import { Provider } from "react-redux";
import store from "./store/store";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  if (!firebase.apps.length) {
    firebase.initializeApp(apiKey.firebaseConfig);
  } else {
    firebase.app();
  }

  return (
    <Provider store={store}>
    <ApplicationProvider {...eva} theme={eva.light}>
      <NavigationContainer>
        {store.getState(isLoggedIn) ? (
          <>
            <AuthenticatedNavigation />
          </>
        ) : (
          <NonAuthenticatedNavigation />
        )}
      </NavigationContainer>
    </ApplicationProvider>
    </Provider>
  );
}
