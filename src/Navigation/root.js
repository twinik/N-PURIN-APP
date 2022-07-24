import React, { useContext, useEffect, useState } from "react";
import AppContext from "../Context/AppContext";
import AuthStack from "./Auth";
import AppStack from "./App";
import { getRecolector } from "../Context/asyncStorage";
import Loader from "../Components/Loader";
export default function root() {
  const [loading, setLoading] = useState(true);
  const { Token, SignIn } = useContext(AppContext);
  useEffect(() => {
    const func = async () => {
      const rec = await getRecolector();
      if (rec) {
        SignIn();
      }
      setLoading(false);
    };
    func();
    console.log(Token);
  }, []);

  if (loading) {
    return <Loader />;
  }

  /* return Token != null ? <AppStack /> : <AuthStack />; */
  return <AppStack />;
}
