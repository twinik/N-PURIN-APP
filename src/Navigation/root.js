import React, { useContext, useEffect } from "react";
import AppContext from "../Context/AppContext";
import AuthStack from "./Auth";
import AppStack from "./App";

export default function root() {
  const { Token, Form_completed, FormState } = useContext(AppContext);

  if (Token === null) {
    return <AuthStack initPage="Login" />;
  }
  if (Form_completed === 0) {
    console.log("GETFORM LENGTH EN ROOT: ", FormState.length);
    if (FormState.length === 0) {
      console.log("ENTRA EN FOMULARIO == 0");
      return <AuthStack initPage="Data0" />;
    }
    if (FormState.length !== 0) {
      console.log("ENTRA EN FOMULARIO != 0");
      return <AuthStack initPage={"Data" + FormState.length} />;
    }
  }
  return <AppStack />;
}
