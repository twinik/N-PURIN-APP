import React, { useContext, useEffect, useState } from "react";
import AppContext from "../Context/AppContext";
import AuthStack from "./Auth";
import AppStack from "./App";
import { getForm } from "../Context/asyncStorage";
export default function root() {
  const { Token, Form_completed, InitializeDropdowns, FormState } =
    useContext(AppContext);

  /* if (Form_completed === 0) {
    console.log("FormState:", FormState);
    if (FormState.length === 0) {
      return <AuthStack initPage="Data0" />;
    }
    return <AuthStack initPage={"Data" + FormState.length} />;
  } */
  console.log("complerte:", Form_completed);
  console.log("token:", Token);
  return Form_completed != 0 && Form_completed != null ? (
    <AppStack />
  ) : Token === "id" ? (
    <AuthStack initPage="Data0" />
  ) : (
    <AuthStack initPage="Register" />
  );
}
