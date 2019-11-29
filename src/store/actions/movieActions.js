import { fetchMovie } from "../../api";

export const LOADING_DETAILS = "LOADING_DETAILS";
export const UPDATE_CURRENT_MOVIE = "UPDATE_CURRENT_MOVIE";
export const FAIL_FETCH_MOVIE = "FAIL_FETCH_MOVIE";

const getMovies = async (id, dispatch) => {
  try {
    const results = await fetchMovie(id);
    // console.log(results);
    dispatch({
      type: UPDATE_CURRENT_MOVIE,
      payload: { ...results }
    });
  } catch (err) {
    dispatch({ type: FAIL_FETCH_MOVIE });
  }
};

export const getMovieDetails = (id, dispatch) => {
  getMovies(id, dispatch);

  return {
    type: LOADING_DETAILS
  };
};
