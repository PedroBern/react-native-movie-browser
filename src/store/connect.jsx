import React from "react";
import { AppContext } from "./Provider";

function connect(
  WrappedComponent,
  mapStateToProps = null,
  mapDispatchToProps = null
) {
  return function(props) {
    const context = React.useContext(AppContext);
    const state = mapStateToProps ? mapStateToProps(context) : {};
    const actions = mapDispatchToProps
      ? mapDispatchToProps(context.dispatch)
      : {};

    return <WrappedComponent {...state} {...actions} {...props} />;
  };
}

export default connect;
