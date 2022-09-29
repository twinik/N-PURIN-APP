import React, { useContext, useEffect, useState } from "react";
import AppContext from "../Context/AppContext";
import AuthStack from "./Auth";
import AppStack from "./App";
import { getForm } from "../Context/asyncStorage";
export default function root() {
  const { Token, Form_completed, InitializeDropdowns, FormState } =
    useContext(AppContext);

  if (Token === null) {
    return <AuthStack initPage="Login" />;
  }
  if (Form_completed === 0) {
    if (FormState.length === 0) {
      return <AuthStack initPage="Data0" />;
    }
    return <AuthStack initPage={"Data" + FormState.length} />;
  }
  return <AppStack />;
}
