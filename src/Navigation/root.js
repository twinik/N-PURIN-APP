import React, { useContext, useEffect, useState } from "react";
import AppContext from "../Context/AppContext";
import AuthStack from "./Auth";
import AppStack from "./App";
export default function root() {
  const { Token, SignIn } = useContext(AppContext);

  return Token != null ? <AppStack /> : <AuthStack />;
}
