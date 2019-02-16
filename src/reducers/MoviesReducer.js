import {
  FETCH_GENRE,
  FETCH_MOVIES_BY_GENRE,
  FETCH_MOVIES
} from "../actions/constants";
import { createReducer } from "./ReducerBolarplate";

const initalState = {
  genres: [],
  loading: true,
  movies: [],
  genreMovies: [],
  page: 1,
  totalPages: 1,
  totalResults: 0,
  genreId: 0
};
export const fetch_movies = (state, payload) => {
  return {
    ...state,
    loding: false,
    movies: payload
  };
};
export const fetch_genre = (state, payload) => {
  return {
    ...state,
    loding: false,
    genres: payload,
    genreId: 0
  };
};
export const fetchMoviesbygenreId = (state, payload) => {
  return {
    ...state,
    loding: false,
    genreMovies: payload
  };
};
export default createReducer(initalState, {
  [FETCH_MOVIES]: fetch_movies,
  [FETCH_GENRE]: fetch_genre,
  [FETCH_MOVIES_BY_GENRE]: fetchMoviesbygenreId
});
