import React, { useState }  from 'react'
import { View, Text, TextInput,Button } from 'react-native'
import createUser from '../components/createUser'

function SignupScreen() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return (
        <View>
            <Text>Sign Up Screen</Text>
            <Text>Email adresi</Text>
            <TextInput onChangeText = {setEmail}/>
            <Text>Şifre</Text>
            <TextInput onChangeText = {setPassword}/>
            <Button onPress={() =>{createUser(email, password)}} title="Kayıt Ol"></Button>
        </View>
    )
}

export default SignupScreen
