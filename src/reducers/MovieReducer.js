import { FETCH_MOVIE_DETAILS } from "../actions/constants";
import { createReducer } from "./ReducerBolarplate";

const initialState = {
  loading: true,
  movie: {},
  genres: [],
  productionCompanies: [],
  videos: [],
  trailer: {},
  reviews: [],
  relatedMovies: [],
  actors: []
};
export function fetchmovieByid(state, payload) {
  return {
    ...state,
    loading: false,
    genres: payload
  };
}
export default createReducer(initialState, {
  [FETCH_MOVIE_DETAILS]: fetchmovieByid
});
