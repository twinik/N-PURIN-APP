import { SET_CONNECTION } from "../types";

export default (state, action) => {
  const { payload, type } = action;

  switch (type) {
    case SET_CONNECTION:
      return payload;

    default:
      return state;
  }
};
