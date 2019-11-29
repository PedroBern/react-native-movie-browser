import {
  LOADING_DETAILS,
  UPDATE_CURRENT_MOVIE,
  FAIL_FETCH_MOVIE
} from "../actions";

export const movieInitialState = {
  title: "",
  year: "",
  rated: "",
  released: "",
  runtime: "",
  genre: "",
  director: "",
  writer: "",
  plot: "",
  imdbID: "",
  response: true,
  isLoading: true,
  error: null
};

export const movieReducer = (state, action) => {
  switch (action.type) {
    case LOADING_DETAILS:
      return { ...state, error: null, isLoading: true };

    case UPDATE_CURRENT_MOVIE:
      return { ...state, error: null, ...action.payload, isLoading: false };

    case FAIL_FETCH_MOVIE:
      return { ...state, isLoading: false, ...action.payload };

    default:
      return { ...state };
  }
};
