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
  trailer: {},
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
      // const trailer = action.payload.results.filter(
      //   video => video.site === "YouTube"
      // )[0];
      return {
        ...state,
        loading: false,
        movie_videos: action.payload
        // trailer: trailer
      };
    case FETCH_MOVIE_CAST:
      return {
        ...state,
        loading: false,
        actors: action.payload.cast.splice(0, 8)
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
