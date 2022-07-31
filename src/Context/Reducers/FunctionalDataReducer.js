import { SET_FUNCTIONAL_DATA } from "../types";

export default (state, action) => {
  const { payload, type } = action;

  switch (type) {
    case SET_FUNCTIONAL_DATA:
      console.log("SET_TOKEN");
      return payload;
    default:
      return state;
  }
};
