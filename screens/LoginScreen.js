import React from 'react'
import { StyleSheet, View, Text, Button } from 'react-native';
import styles from '../styles/LoginScreen.style'
function LoginScreen({navigation}) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Login Screen</Text>
            <Button onPress={() =>{navigation.navigate('SignupScreen')}} title="Go to Sign Up"></Button>
        </View>
    )
}

export default LoginScreen;