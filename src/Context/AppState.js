import React, { useReducer, useState, useEffect } from "react";
import AppContext from "./AppContext";
import { SET_TOKEN } from "./types";
import { rootReducer } from "./Reducers";
import NetInfo from "@react-native-community/netinfo";
import { find } from "lodash";

const AppState = (props) => {
  const initialState = {
    data: { token: null, user: null },
    collections: [],
    connection: true,
    functionalData: {
      suppliers: [],
      halls: [],
      plants: [],
    },
  };

  const [state, dispatch] = useReducer(rootReducer, initialState);

  const initializeOffline = async () => {};

  const SignIn = async (email, password) => {
    const connection = await NetInfo.fetch();

    if (!connection.isConnected) {
      dispatch({
        type: SET_CONNECTION,
        payload: false,
      });
      await initializeOffline();
      return;
    }

    try {
      dispatch({
        type: SET_TOKEN,
        payload: "id",
      });
    } catch (error) {
      throw error;
    }
  };

  return (
    <AppContext.Provider
      value={{
        User: state.data.user,
        SignIn,
        Token: state.data.token,
        FunctionalData: state.functionalData,
        Connection: state.connection,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppState;
