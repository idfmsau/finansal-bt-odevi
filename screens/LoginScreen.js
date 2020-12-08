import React, { useState } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import styles from '../styles/LoginScreen.style';
import userSignIn from '../components/userSignIn';
import { TextInput } from 'react-native-gesture-handler';
function LoginScreen({navigation}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return (
        <View style={styles.container}>


            <Text style={styles.text}>Login Screen</Text>
            <Text>Email adresi</Text>
            <TextInput onChangeText = {setEmail}/>
            <Text>Şifre</Text>
            <TextInput onChangeText = {setPassword}/>
            <Button onPress={() =>{userSignIn(email, password)}} title="Giriş Yap"></Button>
            <Button onPress={() =>{navigation.navigate('SignupScreen')}} title="Go to Sign Up"></Button>
        </View>
    )
}

export default LoginScreen;