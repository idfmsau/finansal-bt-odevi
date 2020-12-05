import React, { useState } from "react";
import * as eva from "@eva-design/eva";
import { ApplicationProvider } from "@ui-kitten/components";
import AuthenticatedNavigation from "./navigations/AuthenticatedNavigation";
import NonAuthenticatedNavigation from "./navigations/NonAuthenticatedNavigation";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
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
