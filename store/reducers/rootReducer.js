import authReducer from "./authReducer";
import { combineReducers } from "redux";
import MovieListReducer from './MovieListReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  MovieListResponse: MovieListReducer
});

export default rootReducer;
