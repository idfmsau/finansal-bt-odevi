import React from 'react'
import { StyleSheet, View, Text, Button } from 'react-native';

function LoginScreen({navigation}) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Login Screen</Text>
            <Button onPress={() =>{navigation.navigate('SignupScreen')}} title="Go to Sign Up"></Button>
        </View>
    )
}

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    text: {
        color: 'green'
    }
})