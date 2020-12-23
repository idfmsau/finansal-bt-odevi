import React, { useEffect } from "react";
import { SafeAreaView, View } from "react-native";
import { Button } from "@ui-kitten/components";
import MovieCard from "../components/movieList/MovieCard";
import { GetRandomMovie } from "../store/actions/MovieListAction";
import styles from "../styles/RandomScreen.style";
import { connect } from "react-redux";

const RandomScreen = ({ randomMovie, GetRandomMovie }) => {
  useEffect(() => {
    GetRandomMovie();
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.movieCard}>
        <MovieCard
          isRandomScreen={true}
          key={randomMovie.id}
          movieId={randomMovie.id}
          name={randomMovie.original_title}
          desc={randomMovie.overview}
          rDate={randomMovie.release_date}
          imagePath={randomMovie.poster_path}
        />
      </View>
      <Button
        style={styles.button}
        status="success"
        onPress={() => GetRandomMovie()}
      >
        Bana Film Bul!
      </Button>
    </SafeAreaView>
  );
};

const mapStateToProps = (state) => {
  return {
    loggedUser: state.auth.loggedUser,
    randomMovie: state.MovieListResponse.randomMovie,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    GetRandomMovie: () => dispatch(GetRandomMovie()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RandomScreen);
