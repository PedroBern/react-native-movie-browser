import {
  ON_CHANGE_INPUT_VALUE,
  UPDATE_MOVIES_LIST,
  FAIL_FETCH,
  ADD_NEXT_PAGE,
  IS_LOADING_NEXT_PAGE
} from "../actions";

export const searchInitialState = {
  data: [],
  totalResults: 0,
  response: false,
  isLoading: false,
  inputValue: "",
  error: null,
  page: 1
};

export const searchReducer = (state, action) => {
  switch (action.type) {
    case ON_CHANGE_INPUT_VALUE:
      const clean = action.payload.text === "";
      return {
        ...state,
        inputValue: action.payload.text,
        isLoading: clean ? false : true,
        error: clean ? null : state.error,
        page: 1
      };

    case UPDATE_MOVIES_LIST:
      return {
        ...state,
        isLoading: false,
        error: null,
        ...action.payload
      };

    case FAIL_FETCH:
      return {
        ...state,
        data: [],
        isLoading: false,
        response: false,
        totalResults: 0,
        error: "Something is wrong, sorry, not your fault!"
      };

    case ADD_NEXT_PAGE:
      let data = [];
      try {
        data = [...state.data, ...action.payload.data];
      } catch {
        data = [...state.data];
      }
      return {
        ...state,
        isLoading: false,
        error: null,
        ...action.payload,
        data,
        page: state.page + 1
      };

    case IS_LOADING_NEXT_PAGE:
      return {
        ...state,
        isLoading: true
      };

    default:
      return { ...state };
  }
};
