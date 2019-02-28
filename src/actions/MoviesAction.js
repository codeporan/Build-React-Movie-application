import axios from "axios";
import { API_KEY, API_MOVIE_URL } from "./api";
import {
  FETCH_MOVIES,
  FETCH_GENRE,
  FETCH_MOVIES_BY_GENRE,
  GET_DISCOVER_MOVIE,
  SELECT_DROPDOWN
} from "./constants";
import { updateUrlParams } from "../components/utils/utils";
const API = "fed69657ba4cc6e1078d2a6a95f51c8c";
export const fetchgenre = () => {
  const request = axios
    .get(
      "https://api.themoviedb.org/3/genre/movie/list?api_key=fed69657ba4cc6e1078d2a6a95f51c8c&language=en-US"
    )
    .then(res => res.data);
  return {
    type: FETCH_GENRE,
    payload: request
  };
};

export const fetchMoviesByGenre = (page = 1, genreId) => {
  const request = axios
    .get(
      `https://api.themoviedb.org/3/genre/${genreId}/movies?api_key=fed69657ba4cc6e1078d2a6a95f51c8c&page=${page}&language=en-US&include_adult=false&sort_by=created_at.asc`
    )
    .then(res => res.data);
  return {
    type: FETCH_MOVIES_BY_GENRE,
    payload: request
  };
};
export const fetchMovies = (page = 1, type = "popular") => {
  const request = axios
    .get(`${API_MOVIE_URL}/movie/${type}${API_KEY}&page=${page}`)
    .then(res => res.data);
  return {
    type: FETCH_MOVIES,
    payload: request
  };
};

export const getMovie = item => {
  const request = axios
    .get(
      `${API_MOVIE_URL}/discover/movie${API_KEY}&language=en-US&region=us&include_adult=false&vote_count.gte=200&${item}`
    )
    .then(res => res.data);
  return {
    type: GET_DISCOVER_MOVIE,
    payload: request
  };
};
