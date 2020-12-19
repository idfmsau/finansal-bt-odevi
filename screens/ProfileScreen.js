import React, { useState, useEffect } from "react";
import styles from "../styles/ProfileScreen.style";
import firebase from "firebase";
import { SafeAreaView, View } from "react-native";
import { Avatar, Text } from "@ui-kitten/components";
import { LinearGradient } from "expo-linear-gradient";
import InfoBox from "../components/profile/InfoBox";
import { connect } from "react-redux";
import MovieCard from "../components/movieList/MovieCard"; 
import { GetFavouriteMovies } from "../store/actions/MovieListAction";

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

// const GetMyList = (callbackFunction) => {
//   const { currentUser } = firebase.auth();
//   let myMovieList = [];
//   firebase
//     .database()
//     .ref(`/Listem/${currentUser.uid}`)
//     .once("value")
//     .then((snapshot) => {
//       myMovieList = Object.values(snapshot.val());
//     });
// };

function ProfileScreen({ loggedUser, favouriteMovieList, GetFavouriteMovies }) {
  const [lengthOfList, setLengthOfList] = useState(0);
  useEffect(() => {
    GetMyListCount(setLengthOfList);
    GetFavouriteMovies();
    //Buraya Redux ile çekme işlemi gelecek
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
      {/* <Button style={styles.followButton} disabled>
        Takip Et
      </Button> */}
      <LinearGradient
        colors={["#D7E1EC", "#FFFFFF"]}
        style={styles.contentBackground}
      >
        <InfoBox title="Listeye Eklenenler" value={lengthOfList}></InfoBox>
        <View style={styles.movieList}>
          {/* {favouriteMovieList ? favouriteMovieList.map((item, index) => (
              <MovieCard
                key={index}
                movieId={item.id}
                name={item.original_title}
                desc={item.overview}
                rDate={item.release_date}
                imagePath={item.poster_path}
              />
            )): <Text>Yükleniyor...</Text>} */}
            {/* Buraya movieCard mapping gelecek */}
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
