import { DELETE_TOKEN, SET_TOKEN, RESET, SET_USER } from "../types";

export default (state, action) => {
  const { payload, type } = action;

  switch (type) {
    case SET_TOKEN:
      console.log("SET_TOKEN");
      return {
        ...state,
        token: payload,
      };
    case DELETE_TOKEN:
      return {
        ...state,
        token: null,
      };
    case RESET:
      console.log("TO");
      return {
        ...state,
        token: "Reset",
      };
    case SET_USER:
      console.log("Set_User");

      return {
        ...state,
        user_id: payload,
      };
    default:
      return state;
  }
};
