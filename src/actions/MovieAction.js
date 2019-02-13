import axios from "axios";
import { API_KEY, API_MOVIE_URL } from "./api";
import {
  FETCH_MOVIE_DETAILS,
  FETCH_MOVIE_VIDEOS,
  FETCH_RELATED_MOVIES,
  FETCH_MOVIE_CAST,
  FETCH_MOVIE_REVIEWS,
  CLEANING_MOVIE_STATE
} from "./constants";
export const fetchMovieByid = (id = 550) => {
  const request = axios
    .get(`${API_MOVIE_URL}/movie/${id}${API_KEY}`)
    .then(res => res.data);
  return {
    type: FETCH_MOVIE_DETAILS,
    payload: request
  };
};
export const fetchMovieByVideo = (id = 550) => {
  const request = axios
    .get(`${API_MOVIE_URL}/movie/${id}/videos${API_KEY}`)
    .then(res => res.data);
  return {
    type: FETCH_MOVIE_VIDEOS,
    payload: request
  };
};
export const fetchMovieByReview = (id = 297761) => {
  const request = axios
    .get(`${API_MOVIE_URL}/movie/${id}/reviews${API_KEY}`)
    .then(res => res.data);
  return {
    type: FETCH_MOVIE_REVIEWS,
    payload: request
  };
};
export const fetchMovieByCast = (id = 550) => {
  const request = axios
    .get(`${API_MOVIE_URL}/movie/${id}/credits${API_KEY}`)
    .then(res => res.data);
  return {
    type: FETCH_MOVIE_CAST,
    payload: request
  };
};
export const fetchMovieByRelated = (id = 106912) => {
  const request = axios
    .get(`${API_MOVIE_URL}/movie/${id}/similar${API_KEY}`)
    .then(res => res.data);
  return {
    type: FETCH_RELATED_MOVIES,
    payload: request
  };
};
export const clearingMovieState = () => {
  return {
    type: CLEANING_MOVIE_STATE,
    payload: {}
  };
};
// export const fetchGenre = (page = 1, type = "popular") => {
//   const request = axios
//     .get(
//       `https://api.themoviedb.org/3/movie/${type}?api_key=fed69657ba4cc6e1078d2a6a95f51c8c&language=en-US&page=${page}`
//       // `${API_MOVIE_URL}/genre/movie/${type}/${API_KEY}&page=${page}`
//       // "https://api.themoviedb.org/3/movie/550?api_key=6d166c524405fe75234d2f5aaf4b2f90"
//     )
//     .then(res => res.data);
//   return {
//     type: FETCH_MOVIE_DETAILS,
//     payload: request
//   };
// };
// export function fetchGenre() {
//   return dispatch => {
//       dispatch({
//           type: FETCH_MOVIE_DETAILS,
//           payload: axios.get('https://api.themoviedb.org/3/genre/movie/list?api_key=fed69657ba4cc6e1078d2a6a95f51c8c&language=en-US')
//       })
//   }
// }

// export function fetchMovie(id) {
//   const request = axios.get(
//     `https://api.themoviedb.org/3/movie/${id}?api_key=fed69657ba4cc6e1078d2a6a95f51c8c&language=en-US`
//   );
//   return dispatch => {
//     dispatch({
//       type: FETCH_MOVIE_DETAILS,
//       payload: request
//     });
//   };
// }
