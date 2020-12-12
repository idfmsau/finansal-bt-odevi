import React, { useState } from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import styles from "../styles/LoginScreen.style";
// import userSignIn from '../components/userSignIn';
import { TextInput } from "react-native-gesture-handler";
import { connect } from "react-redux";
import * as firebase from "firebase";
import {loginUser} from '../store/actions/authActions'
function userSignIn(email, password,loginUser) {
  return firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((user) => {
        loginUser(user);
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
    });
}

function LoginScreen({ navigation, loggedUser, loginUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  console.log(loggedUser);
  
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Login Screen</Text>
      <Text>Email adresi</Text>
      <TextInput onChangeText={setEmail} />
      <Text>Şifre</Text>
      <TextInput onChangeText={setPassword} />
      <Button
        onPress={() => {
            userSignIn(email, password, loginUser)
        }}
        title="Giriş Yap"
      ></Button>
      <Button
        onPress={() => {
          navigation.navigate("SignupScreen");
        }}
        title="Go to Sign Up"
      ></Button>
    </View>
  );
}

const mapStateToProps = (state) => {
  return {
    loggedUser: state.auth.loggedUser,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loginUser: (user) => dispatch(loginUser(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
