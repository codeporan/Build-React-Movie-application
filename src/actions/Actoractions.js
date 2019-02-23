import axios from "axios";
import { API_KEY, API_PERSON_URL } from "./api";
import {
  GET_ACTOR_CREDIT_MOVIES,
  GET_ACTOR_PROFILE,
  GET_ACTOR_LIST
} from "./constants";
export const getPeople = (page = "1") => {
  const request = axios
    .get(`${API_PERSON_URL}/popular${API_KEY}&page=${page}`)
    .then(res => res.data);
  return {
    type: GET_ACTOR_LIST,
    payload: request
  };
};
export const getPeopleProfile = id => {
  const request = axios
    .get(`${API_PERSON_URL}/${id}${API_KEY}`)
    .then(res => res.data);
  return {
    type: GET_ACTOR_PROFILE,
    payload: request
  };
};
export const getActorCreditMovies = id => {
  const request = axios
    .get(`https://api.themoviedb.org/3/person/${id}/movie_credits${API_KEY}`)
    .then(res => res.data);
  return {
    type: GET_ACTOR_CREDIT_MOVIES,
    payload: request
  };
};
