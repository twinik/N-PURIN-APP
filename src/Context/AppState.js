import React, { useReducer, useState, useEffect } from "react";
import AppContext from "./AppContext";
import { getForm } from "./asyncStorage";
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
import {
  Estiercol,
  AguasSucias,
  AguasLimpias,
  Ubi_Estacion,
  AguasLluvia,
} from "../Services/appdata";
import { useQueryClient } from "@tanstack/react-query";

const AppState = (props) => {
  const initialState = {
    data: {
      token: null,
      user_id: null,
      form_completed: null,
      form_state: [],
      user_type: null,
      user_ubication: null,
    },
    functionalData: {
      drop_ubicaciones: [],
      drop_alimentacion: [],
      drop_sistLimpieza: [],
      drop_sepSolidos: [],
    },
  };

  const [state, dispatch] = useReducer(rootReducer, initialState);
  const QueryClient = useQueryClient();

  const GetForm = async () => {
    try {
      const formLocal = await getForm();
      return formLocal;
    } catch (error) {
      throw error;
    }
  };

  const SignIn = async (email, password, navigation) => {
    try {
      let form = await GetForm();
      const result = await Login(email, password);
      console.log("result", result[0]);
      if (result[0].form_completado === 0) {
        await InitializeDropdowns();
      }
      dispatch({
        type: SET_TOKEN,
        payload: {
          token: "token",
          user_id: result[0].id_usuario,
          form_completed: result[0].form_completado,
          form_state: form,
        },
      });

      if (result[0].form_completado === 0) {
        navigation.navigate("Data" + form.length);
        return;
      }

      await QueryClient.prefetchQuery(["Estiercol"], () =>
        Estiercol(result[0].id_usuario)
      );
      await QueryClient.prefetchQuery(["AguasSucias"], () =>
        AguasSucias(result[0].id_usuario)
      );
      await QueryClient.prefetchQuery(["AguasLimpias"], () =>
        AguasLimpias(result[0].id_usuario)
      );
      await QueryClient.prefetchQuery(["Ubi_Estacion"], () =>
        Ubi_Estacion(result[0].id_usuario)
      );

      navigation.reset({
        routes: [{ name: "App" }],
      });
    } catch (error) {
      console.log(error);
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
    await Promise.all([
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
        User_Ubication: state.data.user_ubication,
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
