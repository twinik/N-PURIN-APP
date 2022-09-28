import React, { useReducer, useState, useEffect } from "react";
import AppContext from "./AppContext";
import { SET_TOKEN, SET_USER, SET_FORM, SET_FUNCTIONAL_DATA } from "./types";
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
  setCompletedForms,
} from "../Services/forms";

const AppState = (props) => {
  const initialState = {
    data: { token: null, user_id: null, form_completed: null },
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
      console.log(result);
      dispatch({
        type: SET_USER,
        payload: result[0].id_usuario,
      });
      dispatch({
        type: SET_FORM,
        payload: result[0].form_completado,
      });
    } catch (error) {
      throw error;
    }
  };

  const SignUp = async (email, name, password, usertype) => {
    try {
      const result = await Register(email, name, password, usertype);
      dispatch({
        type: SET_USER,
        payload: result,
      });
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
      .then(async () => {
        console.log("Forms sent");
        try {
          await setCompletedForms(state.data.user_id);
        } catch (error) {
          throw error;
        }
      })
      .catch((error) => {
        throw error;
      });
  };

  return (
    <AppContext.Provider
      value={{
        User_ID: state.data.user_id,
        Form_completed: state.data.form_completed,
        Token: state.data.token,
        FunctionalData: state.functionalData,
        SignIn,
        SignUp,
        InitializeDropdowns,
        SendForms,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppState;
