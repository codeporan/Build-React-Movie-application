import axios from "axios";
import { API_KEY, API_MOVIE_URL } from "./api";
import {
  FETCH_MOVIES,
  FETCH_GENRE,
  FETCH_MOVIES_BY_GENRE,
  FETCH_MOVIE_DETAILS
} from "./constants";

export const fetchgenre = () => {
  const request = axios
    .get(
      "https://api.themoviedb.org/3/genre/movie/list?api_key=6d166c524405fe75234d2f5aaf4b2f90"
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
      `https://api.themoviedb.org/3/genre/${genreId}/movies?api_key=6d166c524405fe75234d2f5aaf4b2f90&page=${page}&language=en-US&include_adult=false&sort_by=created_at.asc`
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
