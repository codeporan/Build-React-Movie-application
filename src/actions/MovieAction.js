import axios from "axios";
import { API_KEY, API_MOVIE_URL } from "./api";
import { FETCH_MOVIE_DETAILS } from "./constants";

export function fetchMovie(id) {
  return dispatch => {
    dispatch({
      type: FETCH_MOVIE_DETAILS,
      payload: axios.get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=fed69657ba4cc6e1078d2a6a95f51c8c&language=en-US`
      )
    });
  };
}
