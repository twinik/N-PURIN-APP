import { ADD_COLLECTION, ADD_COLLECTIONS, UPDATE_COLLECTION } from "../types";
import { findIndex } from "lodash";
export default (state, action) => {
  const { payload, type } = action;

  switch (type) {
    case ADD_COLLECTION:
      console.log("ADD_COLLECTION");
      return [...state, payload];
    case ADD_COLLECTIONS:
      console.log("ADD_COLLECTIONs");
      return [...state, ...payload];
    case UPDATE_COLLECTION:
      console.log("UPDATE_COLLECTION");
      const { id_recoleccion } = payload;
      const index = findIndex(state, { id_recoleccion:id_recoleccion });
      const newArray = [...state];
      newArray[index] = payload;
      return newArray;
    default:
      return state;
  }
};
