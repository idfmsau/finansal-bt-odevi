import firebase from 'firebase';
import React from 'react';
import { StyleSheet, Image, View, TouchableOpacity, Dimensions, Text, Alert } from 'react-native';
import { Card, Modal,Button  } from '@ui-kitten/components';
import { GetMovieImageUrl } from '../../utils/apiUrls';

const { width, height } = Dimensions.get("window");

AddMovieFromList = (movieId) => {
    const { currentUser } = firebase.auth();
    let check=true
    let movieIds = [];

    firebase
        .database()
        .ref(`/Listem/${currentUser.uid}`)
        .once("value")
        .then((snapshot) => 
        Object.values(snapshot.val()==null || snapshot.val()==undefined? [] : snapshot.val()  ))
        .then((list)=>{
        if(list.includes(movieId)) Alert.alert('Hey!','Bu film zaten listende ekli! Şansını farklı filmlerde dene :) ')
        else{
            firebase.database().ref(`/Listem/${currentUser.uid}`)
            .push(movieId)
            .then(() => {
                Alert.alert("Hey!","Listene Başarıyla Eklendi.")
            }).catch((ex)=>{console.log(ex)});
        }
    }).catch((ex)=>{console.log(ex)});
}

const MovieCard = (props) => {
    const [visible, setVisible] = React.useState(false);
    const [uri, setUri] = React.useState ('')
    React.useEffect(()=> {
        const getImgPath = async ()=> {
            setUri (await GetMovieImageUrl(props.imagePath))
    }; 
    getImgPath()
    },[])

    return (
        <>
            <View>
                <TouchableOpacity
                        onPress = {()=> AddMovieFromList(props.movieId)}
                        onLongPress = {() => setVisible(true)}
                    >
                        <Image
                                style={props.isRandomScreen ? styles.randomScreenLogo : styles.tinyLogo}
                                source={{uri: uri}}
                        />
                </TouchableOpacity>
            </View>
            <View>
                <Modal visible={visible}>
                    <Card disabled={true}>
                        <Text style={{fontWeight:'800', fontSize:18}}>
                            {props.name}
                        </Text>
                        <Text category='s2' style={{marginTop:5}}>
                            {props.desc}
                        </Text>
                        <Text category='s2' style={{fontWeight:'800',marginTop:5}}>
                            Yayım Tarihi: {props.rDate}
                        </Text>
                        <Button status='basic' onPress={() => setVisible(false)} style={{marginTop:10}}>
                            Kapat
                        </Button>
                    </Card>
                </Modal>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    tinyLogo: {
        width: width/3.3,
        height: height/3.8,
        margin:width/70,
        borderRadius: 10
    },
    randomScreenLogo: {
        marginTop: -height/5,
        borderRadius: 0,
        width: width,
        height: height,
    }
})

export default MovieCard;