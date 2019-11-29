import { movieReducer, movieInitialState } from "./movieReducer";
import { searchReducer, searchInitialState } from "./searchReducer";
import combineReducers from "../combineReducers";

export const reducer = combineReducers({
  movie: movieReducer,
  search: searchReducer
});

export const initialState = {
  movie: { ...movieInitialState },
  search: { ...searchInitialState }
};
