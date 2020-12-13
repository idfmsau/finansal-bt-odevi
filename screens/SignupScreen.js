import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import createUser from "../components/createUser";


function SignupScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  return (
    <View>
      <Text>Sign Up Screen</Text>
      <Text>Email adresi</Text>
      <TextInput onChangeText={setEmail} />
      <Text>Şifre</Text>
      <TextInput onChangeText={setPassword} />
      <Button style={style.button}
        onPress={() => {
          createUser(email, password).catch(err => setError(err));
        }}
        title="Kayıt Ol"
      ></Button>
      <Text style={style.alert}>{error}</Text>
    </View>
  );
}

const style = StyleSheet.create({
    alert: {
        color: 'red',
        textAlign: 'center',
        marginTop: 20
    },
    button: {
        width: 50
    }
})
export default SignupScreen;
