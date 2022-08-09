import { SET_FUNCTIONAL_DATA } from "../types";

export default (state, action) => {
  const { payload, type } = action;

  switch (type) {
    case SET_FUNCTIONAL_DATA:
      return payload;
    default:
      return state;
  }
};
