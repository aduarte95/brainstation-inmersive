import React, { useState } from "react";
import PropTypes from "prop-types";
import { dataState } from "./hooks";

const AppContext = React.createContext([{}, () => {}]);

const AppProvider = props => {
  const [state, setState] = useState({
    data: dataState
  });

  return (
    <AppContext.Provider value={[state, setState]}>
      {props.children}
    </AppContext.Provider>
  );
};

AppProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};

export { AppContext, AppProvider };