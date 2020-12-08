 import React, { useState } from "react";
import * as eva from "@eva-design/eva";
import { ApplicationProvider } from "@ui-kitten/components";
import AuthenticatedNavigation from "./navigations/AuthenticatedNavigation";
import NonAuthenticatedNavigation from "./navigations/NonAuthenticatedNavigation";
import * as firebase from 'firebase';
import apiKey from './config/keys';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Initialize Firebase
  firebase.initializeApp(apiKey.firebaseConfig);
  //firebase.analytics();
  
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      {isLoggedIn ? (
        <>
          <AuthenticatedNavigation />
        </>
      ) : ( 
        <NonAuthenticatedNavigation/>
      )}
    </ApplicationProvider>
  );
}
