import { fetchMoviesList } from "../../api";

export const ON_CHANGE_INPUT_VALUE = "ON_CHANGE_INPUT_VALUE";
export const UPDATE_MOVIES_LIST = "UPDATE_MOVIES_LIST";
export const FAIL_FETCH = "FAIL_FETCH";
export const ADD_NEXT_PAGE = "ADD_NEXT_PAGE";
export const IS_LOADING_NEXT_PAGE = "IS_LOADING_NEXT_PAGE";

const getMovies = async (text, dispatch, page = 1) => {
  try {
    const results = await fetchMoviesList(text, page);
    dispatch({
      type: page > 1 ? ADD_NEXT_PAGE : UPDATE_MOVIES_LIST,
      payload: { ...results }
    });
  } catch (err) {
    dispatch({ type: FAIL_FETCH });
  }
};

export const onChangeInputValue = (text, dispatch) => {
  if (text.length > 0) getMovies(text, dispatch);

  return {
    type: ON_CHANGE_INPUT_VALUE,
    payload: { text }
  };
};

export const addNextPage = (text, dispatch, page) => {
  getMovies(text, dispatch, page);

  return {
    type: IS_LOADING_NEXT_PAGE
  };
};
