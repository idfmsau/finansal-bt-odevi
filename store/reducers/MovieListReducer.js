import { CHANGE_GENRE_INDEX, GET_CATEGORIES, GET_POPULAR_MOVIES } from '../types/MovieListType';

const INITIAL_STATE={
    selectedIndex : 0,
    displayValue : '',
    GenresList : '',
    MoviesList : ''
};

export default(state = INITIAL_STATE, action) => {
    switch(action.type) {
        case CHANGE_GENRE_INDEX:
            return {...state, selectedIndex:action.payload.index, displayValue:action.payload.displayValue }
        case GET_CATEGORIES:
            return {...state, GenresList:action.payload}
        case GET_POPULAR_MOVIES:
            return {...state, MoviesList:action.payload}
        default:
            return state;
    }
};