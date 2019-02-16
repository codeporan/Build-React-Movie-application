import axios from "axios";
import { API_KEY, API_PERSON_URL } from "./api";
import { GET_ACTOR_CREDIT_MOVIES, GET_ACTOR_PROFILE } from "./constants";
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
    .get(`${API_PERSON_URL}/${id}/movie_credits${API_KEY}`)
    .then(res => res.data);
  return {
    type: GET_ACTOR_CREDIT_MOVIES,
    payload: request
  };
};
