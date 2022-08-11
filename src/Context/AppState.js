import React, { useReducer, useState, useEffect } from "react";
import AppContext from "./AppContext";
import { SET_TOKEN, SET_USER, ADD_USER, SET_FUNCTIONAL_DATA } from "./types";
import { rootReducer } from "./Reducers";
import { Login, Register } from "../Services/auth";
import {
  Ubicaciones,
  Alimentacion,
  SistemaLimpieza,
  SeparacionSolidos,
} from "../Services/dropdowns";
import {
  setSalaOrdena,
  setConstruccion,
  setVacaOrdena,
  setPozoPurinero,
} from "../Services/forms";
const AppState = (props) => {
  const initialState = {
    data: { token: null, user_id: null },
    functionalData: {
      drop_ubicaciones: [],
      drop_alimentacion: [],
      drop_sistLimpieza: [],
      drop_sepSolidos: [],
    },
  };

  const [state, dispatch] = useReducer(rootReducer, initialState);

  const SignIn = async (email, password) => {
    try {
      const result = await Login(email, password);
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

  const SignUp = async (email, name, password) => {
    try {
      const result = await Register(email, name, password);
      dispatch({
        type: SET_USER,
        payload:  result ,
      });
      console.log("User registered", result);
    } catch (error) {
      throw error;
    }
  };

  const InitializeDropdowns = async () => {
    Promise.all([
      Ubicaciones(),
      Alimentacion(),
      SistemaLimpieza(),
      SeparacionSolidos(),
    ])
      .then(([ubicaciones, alimentaciones, sistemaLimpieza, sepSolidos]) => {
        dispatch({
          type: SET_FUNCTIONAL_DATA,
          payload: {
            drop_ubicaciones: ubicaciones,
            drop_alimentacion: alimentaciones,
            drop_sistLimpieza: sistemaLimpieza,
            drop_sepSolidos: sepSolidos,
          },
        });
      })
      .catch((error) => {
        throw error;
      });
  };

  const SendForms = async ({
    formSalaOrdena,
    formConstruccion,
    formVacaOrdena,
    formPozoPurinero,
  }) => {
    Promise.all([
      setSalaOrdena(formSalaOrdena),
      setConstruccion(formConstruccion),
      setVacaOrdena(formVacaOrdena),
      setPozoPurinero(formPozoPurinero),
    ])
      .then(() => {
        console.log("Forms sent");
      })
      .catch((error) => {
        throw error;
      });
  };

  return (
    <AppContext.Provider
      value={{
        User_ID: state.data.user_id,
        SignIn,
        SignUp,
        InitializeDropdowns,
        SendForms,
        Token: state.data.token,
        FunctionalData: state.functionalData,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppState;
