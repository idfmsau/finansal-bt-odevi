import firebase from 'firebase';
import React from 'react';
import { StyleSheet, Image, View, TouchableOpacity, Dimensions, Text, Alert } from 'react-native';
import { Card, Modal,Button  } from '@ui-kitten/components';
import { GetMovieImageUrl } from '../../utils/apiUrls';

const { width, height } = Dimensions.get("window");

AddMovieFromList = (movieId) => {
    const { currentUser } = firebase.auth();

    firebase.database().ref(`/Listem/${currentUser.uid}`)
            .push(movieId)
            .then(() => {
                Alert.alert("Hey!","Listene Başarıyla Eklendi.")
        });
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
                                style={styles.tinyLogo}
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
    }
})

export default MovieCard;