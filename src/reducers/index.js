import { combineReducers } from "redux";
import MovieReducer from "./MovieReducer";
const rootReducer = combineReducers({
  movie: MovieReducer
});

export default rootReducer;
