import { CHANGE_GENRE_INDEX, GET_CATEGORIES, GET_POPULAR_MOVIES } from '../types/MovieListType';

const API_URL = 'https://api.themoviedb.org/3/';
const API_KEY= '?api_key=ae9c379c0a2f7020bfcc20e8fec6166e';
const GENRE_LIST= 'genre/movie/list';
const MOVIE_LIST_FROM_GENRE= 'discover/movie';
const MOVIE_IMAGE_URL = 'https://image.tmdb.org/t/p/original/';
const POPULAR_MOVIES = 'movie/popular';
const LANGUAGE_TR ='&language=tr-TR';

export const LoadingPage=() =>{
    return (dispatch) =>{
        let categoryUrl = API_URL + GENRE_LIST + API_KEY + LANGUAGE_TR;
        let populerMoviesUrl = API_URL + POPULAR_MOVIES + API_KEY + LANGUAGE_TR;
        fetch(categoryUrl)
        .then((response) => response.json())
        .then((json) => {
            dispatch({
                type: GET_CATEGORIES,
                payload: json.genres
            });
        })
        .catch((ex) => console.log(ex));
        
        fetch(populerMoviesUrl)
        .then((response) => response.json())
        .then((json) => {
            dispatch({
                type: GET_POPULAR_MOVIES,
                payload: json.results
            });
        })
        .catch((ex) => console.log(ex))
    };
}

export const ChangeGenreIndex=(index,displayValue,genreId) =>{
    return (dispatch) =>{
        dispatch({
            type: CHANGE_GENRE_INDEX,
            payload: {  index:index, 
                        displayValue:displayValue
                    }
        });
        let movieListFromGenreUrl = API_URL + MOVIE_LIST_FROM_GENRE + API_KEY + '&with_genres=' + genreId + LANGUAGE_TR;
        let populerMoviesUrl = API_URL + POPULAR_MOVIES + API_KEY + LANGUAGE_TR;
        fetch(index!==0 ? movieListFromGenreUrl : populerMoviesUrl)
        .then((response) => response.json())
        .then((json) => {
            dispatch({
                type: GET_POPULAR_MOVIES,
                payload: json.results
            });
        })
        .catch((ex) => console.log(ex))
    };
}