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
export const fetchMovieByid = id => {
  const request = axios
    .get(
      `${API_MOVIE_URL}/movie/${id}${API_KEY}&language=en-US&append_to_response=images&include_image_language=en,null`
    )
    .then(res => res.data);
  return {
    type: FETCH_MOVIE_DETAILS,
    payload: request
  };
};
export const fetchMovieByVideo = id => {
  const request = axios
    .get(`${API_MOVIE_URL}/movie/${id}/videos${API_KEY}`)
    .then(res => res.data);
  return {
    type: FETCH_MOVIE_VIDEOS,
    payload: request
  };
};
export const fetchMovieByReview = id => {
  const request = axios
    .get(`${API_MOVIE_URL}/movie/${id}/reviews${API_KEY}`)
    .then(res => res.data);
  return {
    type: FETCH_MOVIE_REVIEWS,
    payload: request
  };
};
export const fetchMovieByCast = id => {
  const request = axios
    .get(`${API_MOVIE_URL}/movie/${id}/credits${API_KEY}`)
    .then(res => res.data);
  return {
    type: FETCH_MOVIE_CAST,
    payload: request
  };
};
export const fetchMovieByRelated = id => {
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
