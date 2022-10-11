import React, { useReducer, useState, useEffect } from "react";
import AppContext from "./AppContext";
import { SET_TOKEN, SET_USER, GET_FORM, SET_FUNCTIONAL_DATA } from "./types";
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
import { getForm } from "./asyncStorage";

const AppState = (props) => {
  const initialState = {
    data: {
      token: null,
      user_id: null,
      form_completed: null,
      form_state: [],
      user_type: null,
    },
    functionalData: {
      drop_ubicaciones: [],
      drop_alimentacion: [],
      drop_sistLimpieza: [],
      drop_sepSolidos: [],
    },
  };

  const [state, dispatch] = useReducer(rootReducer, initialState);

  const GetForm = async () => {
    try {
      const formLocal = await getForm();
      dispatch({
        type: GET_FORM,
        payload: formLocal,
      });
    } catch (error) {
      throw error;
    }
  };

  const SignIn = async (email, password) => {
    try {
      GetForm();
      const result = await Login(email, password);
      if (result[0].form_completado === 0) {
        InitializeDropdowns();
      }
      console.log("DATOS LOGIN EN STATE: ", result);
      dispatch({
        type: SET_TOKEN,
        payload: {
          token: "token",
          user_id: result[0].id_usuario,
          form_completed: result[0].form_completado,
        },
      });
    } catch (error) {
      throw error;
    }
  };

  const SignUp = async (user) => {
    try {
      const result = await Register(user);
      dispatch({
        type: SET_USER,
        payload: {
          user_id: result,
          user_type: user.usertype,
        },
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
        /*  console.log(
          "ubicaciones:",
          ubicaciones + "alimentaciones:",
          alimentaciones + "sistemaLimpieza:",
          sistemaLimpieza + "sepSolidos:",
          sepSolidos
        ); */
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
        User_Type: state.data.user_type,
        Form_completed: state.data.form_completed,
        Token: state.data.token,
        FunctionalData: state.functionalData,
        FormState: state.data.form_state,
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
