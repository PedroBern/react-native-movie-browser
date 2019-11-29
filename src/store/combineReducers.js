const combineReducers = reducers => {
  const mainReducer = {};
  const keys = Object.keys(reducers).forEach(key => {
    mainReducer[key] = reducers[key];
  });

  return (state, action) => {
    const finalResult = {};
    Object.keys(state).forEach(key => {
      finalResult[key] = mainReducer[key]
        ? mainReducer[key](state[key], action)
        : state[key];
    });
    return finalResult;
  };
};

export default combineReducers;
