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
  poster: "",
  response: true
};

export const movieReducer = (state, action) => {
  switch (action.type) {
    default:
      return { ...state };
  }
};
