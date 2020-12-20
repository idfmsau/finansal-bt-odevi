import React from "react";
import AuthenticatedNavigation from "../navigations/AuthenticatedNavigation";
import NonAuthenticatedNavigation from "../navigations/NonAuthenticatedNavigation";
import { NavigationContainer } from "@react-navigation/native";
import { connect } from "react-redux";

const RootNavigation = ({ loggedUser }) => {
  return (
    <NavigationContainer>
      {loggedUser.isLoggedIn ? (
        <>
          <AuthenticatedNavigation />
        </>
      ) : (
        <NonAuthenticatedNavigation />
      )}
    </NavigationContainer>
  );
};

const mapStateToProps = (state) => {
  return {
    loggedUser: state.auth.loggedUser,
  };
};

export default connect(mapStateToProps)(RootNavigation);
