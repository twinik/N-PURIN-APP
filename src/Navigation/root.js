import React, { useContext, useEffect, useState } from "react";
import AppContext from "../Context/AppContext";
import AuthStack from "./Auth";
import AppStack from "./App";
export default function root() {
  const { Token, Form_completed, InitializeDropdowns } = useContext(AppContext);

  useEffect(() => {
    try {
      if (Form_completed === 0) InitializeDropdowns();
    } catch (error) {
      alert(error.message);
    }
  }, []);

  if (Form_completed === 0) {
    InitializeDropdowns();
    return <AuthStack initPage="Data0" />;
  }

  return Token != null ? <AppStack /> : <AuthStack />;
}
