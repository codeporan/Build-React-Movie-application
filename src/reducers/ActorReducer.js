import {
  GET_ACTOR_CREDIT_MOVIES,
  GET_ACTOR_PROFILE
} from "../actions/constants";

const initalState = {
  actorsProfiles: [],
  movies: [],
  loading: true
};

export default (state = initalState, action = {}) => {
  switch (action.type) {
    case GET_ACTOR_PROFILE:
      return {
        ...state,
        loading: false,
        actorsProfiles: action.payload
      };
    case GET_ACTOR_CREDIT_MOVIES:
      return {
        ...state,
        loading: false,
        movies: action.payload
      };
    default: {
      return state;
    }
  }
};
