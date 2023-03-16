import React from "react";
import { createContext, useReducer } from "react"
export const ContextOne = createContext();
   const INITIAL_STATE = "";

   const AuthReducers = (state, action) => {
    switch (action.type) {
      case "TEST":
        return {
          state: action.payload,
        //   dispatch,
        };
      default:
        return state;
    }
  };

export const ContextTwo = (props) => {
    const [state, dispatch] = useReducer(AuthReducers, INITIAL_STATE);
    return (
        <ContextOne.Provider value={{
            statehere:state,
            dispatch,
          }}>
            {props.children}
        </ContextOne.Provider>

    )
}
