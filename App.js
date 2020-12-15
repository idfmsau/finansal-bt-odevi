import React, { useState } from "react";
import * as eva from "@eva-design/eva";
import { ApplicationProvider } from "@ui-kitten/components";
import * as firebase from "firebase";
import apiKey from "./config/keys";
import { Provider } from "react-redux";
import store from "./store/store";
import RootNavigator from "./navigations/RootNavigation";
export default function App() {
  if (!firebase.apps.length) {
    firebase.initializeApp(apiKey.firebaseConfig);
  } else {
    firebase.app();
  }

  return (
    <Provider store={store}>
    <ApplicationProvider {...eva} theme={eva.light}>
      <RootNavigator/>
    </ApplicationProvider>
    </Provider>
  );
}
