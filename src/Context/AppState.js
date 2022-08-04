import React, { useReducer, useState, useEffect } from "react";
import AppContext from "./AppContext";
import { SET_TOKEN, SET_USER } from "./types";
import { rootReducer } from "./Reducers";
import { fetchUser } from "../Services/auth";
const AppState = (props) => {
  const initialState = {
    data: { token: null, user: null },
    functionalData: {
      suppliers: [],
      halls: [],
      plants: [],
    },
  };

  const [state, dispatch] = useReducer(rootReducer, initialState);

  const SignIn = async (email, password) => {
    try {
      const result = await fetchUser(email, password);
      dispatch({
        type: SET_TOKEN,
        payload: "id",
      });
      dispatch({
        type: SET_USER,
        payload: result,
      });
    } catch (error) {
      throw error;
    }
  };

  const SignUp = () => {
    dispatch({
      type: RESET,
      payload: "",
    });
  };

  return (
    <AppContext.Provider
      value={{
        User: state.data.user,
        SignIn,
        Token: state.data.token,
        FunctionalData: state.functionalData,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppState;
