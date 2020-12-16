import React, { useState } from "react";
import { View, Text,StyleSheet, TouchableOpacity, ImageBackground, StatusBar, Alert  } from "react-native";
import createUser from "../components/createUser";
import styles from "../styles/LoginScreen.style";
import { TextInput } from "react-native-gesture-handler";
import {TypingAnimation} from 'react-native-typing-animation'
import Feather from "react-native-vector-icons/Feather";

function SignupScreen({navigation}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const [typingEmail, setTypingEmail] = useState(false)
  const [securePassword, setSecurePassword] = useState(true)
  const [secureConfirmPassword, setSecureConfirmPassword] = useState(true)

  _typeFocus = (value) => {
    if(value=='email'){
      setTypingEmail(true)
    }
    else{
      setTypingEmail(false);
    }
  }

  _typingDots = () => {
    return (
      <TypingAnimation
      dotColor = "black"
      style = {{marginRight:25}}
      />
    )
  }

  _comparePasswords = (email,password, confirmPassword,navigation) => {
    if(email === "" || password ==="" || confirmPassword ===""){
      Alert.alert("Lütfen Geçerli bir email ve şifre giriniz")
    }
    else if(password === confirmPassword){
      createUser(email, password);     
      navigation.navigate("LoginScreen");
    }
    else{
      Alert.alert("Şifreler eşleşmiyor")
    }
  }


  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
        <View style={styles.header}>
          <ImageBackground
            source={require("../images/header.png")}
            style={styles.imageBackground}>
              <Text style={{
                color:'white',
                fontWeight:'bold',
                fontSize:30
              }}>Merhaba!</Text>
              <Text style={{color:"white"}}>Seni aramızda görmeyi çok isteriz</Text>
          </ImageBackground>
        </View>
        <View style={styles.footer}>
          <Text style={styles.title}>Email adresi</Text>
          <View style={styles.action}>
            <TextInput
            placeholder="Emailinizi Giriniz..."
            style={styles.textInput}
            onChangeText={setEmail} 
            onFocus={()=>_typeFocus('email')}
            />
            {typingEmail ?
              _typingDots()
              : null
            }
          </View>
          <Text style={styles.title}>Şifre</Text>
          <View style={styles.action}>
            <TextInput 
            placeholder="Şifrenizi Giriniz..."
            secureTextEntry={securePassword}
            style={styles.textInput}
            onChangeText={setPassword} 
            />
            <TouchableOpacity 
              onPress={()=>setSecurePassword(!securePassword)}>
              {securePassword ?
              <Feather
                name="eye-off"
                color="gray"
                size ={25}
              />
              :
              <Feather
              name="eye"
              color="gray"
              size ={25}
            />}
            </TouchableOpacity>
          </View>
          <Text style={styles.title}>Şifreyi Doğrula</Text>
          <View style={styles.action}>
            <TextInput 
            placeholder="Şifrenizi Tekrarlayınız..."
            secureTextEntry={secureConfirmPassword}
            style={styles.textInput}
            onChangeText={setConfirmPassword} 
            />
            <TouchableOpacity 
              onPress={()=>setSecureConfirmPassword(!secureConfirmPassword)}>
              {secureConfirmPassword == true ?
              
              <Feather
                name="eye-off"
                color="gray"
                size ={25}
              />
              :
              <Feather
              name="eye"
              color="gray"
              size ={25}
            />}
            </TouchableOpacity>            
          </View>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                _comparePasswords(email,password,confirmPassword,navigation)
              }}
            >
            <View style={styles.buttonContainer}>
              <Text style={styles.buttonText}>Kayıt Ol</Text>
            </View>
            </TouchableOpacity>
      </View>
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
