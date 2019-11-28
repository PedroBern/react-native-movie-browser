import React from "react";
import PropTypes from "prop-types";

export const AppContext = React.createContext();

export const Provider = ({ initialState, reducer, children }) => {
  const [state, dispatch] = React.useReducer(reducer, {
    ...initialState,
    dispatch: action => dispatch(action)
  });

  return <AppContext.Provider value={state}>{children}</AppContext.Provider>;
};

Provider.propTypes = {
  initialState: PropTypes.object.isRequired,
  reducer: PropTypes.func.isRequired
};
