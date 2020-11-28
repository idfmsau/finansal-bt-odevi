import { GET_CATEGORIES } from '../types/MovieListType';

const INITIAL_STATE={
    categoryList:[]
};

export default(state = INITIAL_STATE, action) => {
    switch(action.type) {
        case GET_CATEGORIES:
            return {...state, categoryList:action.payload.value};
            default:
                return state;
    }
};