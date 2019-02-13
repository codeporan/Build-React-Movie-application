import { combineReducers } from "redux";
import MovieReducer from "./MovieReducer";
import MoviesReducer from "./MoviesReducer";
import { loadingBarReducer } from "react-redux-loading-bar";

const rootReducer = combineReducers({
  movie: MovieReducer,
  movies: MoviesReducer,
  loadingBar: loadingBarReducer
});

export default rootReducer;
