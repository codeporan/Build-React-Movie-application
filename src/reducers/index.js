import { combineReducers } from "redux";
import MovieReducer from "./MovieReducer";
import MoviesReducer from "./MoviesReducer";
import ActorReducer from "./ActorReducer";
import { loadingBarReducer } from "react-redux-loading-bar";

const rootReducer = combineReducers({
  movie: MovieReducer,
  movies: MoviesReducer,
  actor: ActorReducer,
  loadingBar: loadingBarReducer
});

export default rootReducer;
