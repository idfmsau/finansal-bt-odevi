import React, { useEffect } from "react";
import styles from "../styles/ProfileScreen.style";
import { SafeAreaView, View, ScrollView  } from "react-native";
import { Avatar, Text } from "@ui-kitten/components";
import { LinearGradient } from "expo-linear-gradient";
import InfoBox from "../components/profile/InfoBox";
import { connect } from "react-redux";
import MovieCard from "../components/movieList/MovieCard"; 
import { GetFavouriteMovies } from "../store/actions/MovieListAction";

function ProfileScreen({ loggedUser, navigation, favouriteMovieList,  GetFavouriteMovies}) {
  
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      GetFavouriteMovies();
    });
    return unsubscribe
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={["black", "#808080"]}
        style={styles.profileBackground}
      >
        <Text style={styles.userNameText} category="h6" status="basic">
          {loggedUser.user.user.email}
        </Text>
      </LinearGradient>
        <InfoBox title="Listemde Neler Var?" value={favouriteMovieList.length}></InfoBox>
        <ScrollView>
        <View style={styles.mainView}>
          {favouriteMovieList.length>0 ? favouriteMovieList.map((item, index) => (
              <MovieCard
                key={index}
                movieId={item.id}
                name={item.original_title}
                desc={item.overview}
                rDate={item.release_date}
                imagePath={item.poster_path}
              />
            )): <Text>Üzgünüz :( Listenizde Film Bulunmamaktadır!</Text>
        } 
        </View>
        </ScrollView>
    </SafeAreaView>
  );
}

const mapStateToProps = (state) => {
  return {
    loggedUser: state.auth.loggedUser,
    favouriteMovieList: state.MovieListResponse.favouriteMovieList,
  };
};

export default connect(mapStateToProps, { GetFavouriteMovies })(ProfileScreen);
