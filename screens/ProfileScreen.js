import React, { useState, useEffect } from "react";
import styles from "../styles/ProfileScreen.style";
import firebase from "firebase";
import { FlatList, SafeAreaView, ScrollView, View } from "react-native";
import { Avatar, Text } from "@ui-kitten/components";
import { LinearGradient } from "expo-linear-gradient";
import InfoBox from "../components/profile/InfoBox";
import { connect } from "react-redux";
import MovieCard from "../components/movieList/MovieCard"; 
import { GetFavouriteMovies } from "../store/actions/MovieListAction";
import {GetFavouriteFilms} from '../utils/apiRequester'

const GetMyListCount = (setFunc) => {
  const { currentUser } = firebase.auth();
  return firebase
    .database()
    .ref(`/Listem/${currentUser.uid}`)
    .once("value")
    .then((snapshot) => {
      setFunc(snapshot.numChildren());
    });
};

const GetMyList = (setFunc) => {
  const { currentUser } = firebase.auth();
  let values = [];
  firebase
    .database()
    .ref(`/Listem/${currentUser.uid}`)
    .once("value")
    .then((snapshot) => {
      setFunc(Object.values(snapshot.val()));
    });

    return values;
};

function ProfileScreen({ loggedUser }) {
  const [lengthOfList, setLengthOfList] = useState(0);
  const [favouriteIds, setFavouriteIds] = useState('');
  const [favouriteMovies, setFavouriteMovies] = useState(false);

  useEffect(() => {
    async function LoadData(){
      await GetMyListCount(setLengthOfList);
      await GetMyList(setFavouriteIds);
      await GetFavouriteFilms(favouriteIds, setFavouriteMovies);
    }
    
    LoadData();

  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={["#FFB92A", "#FFA400"]}
        style={styles.profileBackground}
      >
        <Avatar
          style={styles.avatar}
          source={require("../images/12angrymen.jpg")}
        />
        <Text style={styles.userNameText} category="h6" status="basic">
          {loggedUser.user.user.email}
        </Text>
      </LinearGradient>
      <LinearGradient
        colors={["#D7E1EC", "#FFFFFF"]}
        style={styles.contentBackground}
      >
        <InfoBox title="Listeye Eklenenler" value={lengthOfList}></InfoBox>
        <View style={styles.movieList}>
        <ScrollView horizontal={true}>
          {favouriteMovies ? favouriteMovies.map((item, index) => {return <MovieCard 
                key={index}
                movieId={item.id}
                name={item.original_title} 
                desc={item.overview}
                rDate={item.release_date}
                imagePath={item.poster_path}
              />}): <Text>Yükleniyor...</Text>}
        </ScrollView>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
}

const mapStateToProps = (state) => {
  return {
    loggedUser: state.auth.loggedUser,
    favouriteMovieList: state.MovieListResponse.favouriteMovieList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    GetFavouriteMovies: () => dispatch(GetFavouriteMovies()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen);
