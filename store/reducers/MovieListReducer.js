import { CHANGE_GENRE_INDEX, GET_CATEGORIES, GET_FAVOURITE_MOVIES, GET_POPULAR_MOVIES, GET_RANDOM_MOVIE } from '../types/MovieListType';

const INITIAL_STATE={
    selectedIndex : 0,
    displayValue : '',
    GenresList : '',
    MoviesList : '',
    randomMovie: '',
    favouriteMovieList: []
};

export default(state = INITIAL_STATE, action) => {
    switch(action.type) {
        case CHANGE_GENRE_INDEX:
            return {...state, selectedIndex:action.payload.index, displayValue:action.payload.displayValue }
        case GET_CATEGORIES:
            return {...state, GenresList:action.payload}
        case GET_POPULAR_MOVIES:
            return {...state, MoviesList:action.payload}
        case GET_RANDOM_MOVIE:
            return {...state, randomMovie: action.payload}
        case GET_FAVOURITE_MOVIES:
            return {...state, favouriteMovieList: action.payload}
        default:
            return state;
    }
};