import {
  FETCH_MOVIE_DETAILS,
  FETCH_MOVIE_VIDEOS,
  FETCH_MOVIE_CAST,
  FETCH_RELATED_MOVIES,
  FETCH_MOVIE_REVIEWS,
  CLEANING_MOVIE_STATE
} from "../actions/constants";
import { createReducer } from "./ReducerBolarplate";

const initalState = {
  movie_details: {},
  movie_videos: [],
  actors: [],
  relatedMovies: [],
  reviews: [],
  loading: true
};

export default (state = initalState, action = {}) => {
  switch (action.type) {
    case FETCH_MOVIE_DETAILS:
      return {
        ...state,
        loading: false,
        movie_details: action.payload
      };
    case FETCH_MOVIE_VIDEOS:
      return {
        ...state,
        loading: false,
        movie_videos: action.payload
      };
    case FETCH_MOVIE_CAST:
      return {
        ...state,
        loading: false,
        actors: action.payload
      };
    case FETCH_RELATED_MOVIES:
      return {
        ...state,
        loading: false,
        relatedMovies: action.payload
      };
    case FETCH_MOVIE_REVIEWS:
      return {
        ...state,
        loading: false,
        reviews: action.payload
      };
    case CLEANING_MOVIE_STATE:
      return {
        ...state
      };
    default: {
      return state;
    }
  }
};
// const initialState = {
//   loading: true,
//   movie: {},
//   genres: [],
//   productionCompanies: [],
//   videos: [],
//   trailer: {},
//   reviews: [],
//   relatedMovies: [],
//   actors: []
// };
// export function fetchmovieByid(state, payload) {
//   return {
//     ...state,
//     loading: false,
//     genres: payload
//   };
// }
// export default createReducer(initialState, {
//   [FETCH_MOVIE_DETAILS]: fetchmovieByid
// });
