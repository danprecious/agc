"use client";

import React, { useReducer } from "react";
import { reducer } from "./reducer";

export const GlobalContext = React.createContext();

const GlobalContextProvider = ({ children }) => {
  const defaultState = {
    mobileNavOpen: false,
  };

  const [state, dispatch] = useReducer(reducer, defaultState);

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
