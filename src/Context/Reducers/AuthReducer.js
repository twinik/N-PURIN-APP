import {
  DELETE_TOKEN,
  SET_TOKEN,
  RESET,
  SET_USER,
  SET_FORM,
  GET_FORM,
} from "../types";

export default (state, action) => {
  const { payload, type } = action;

  switch (type) {
    case SET_TOKEN:
      console.log("SET_TOKEN");
      return {
        ...payload
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

    case SET_FORM:
      console.log("Set_FORM");
      return {
        ...state,
        form_completed: payload,
      };

    case GET_FORM:
      console.log("GET_FORM");
      return {
        ...state,
        formState: payload,
      };

    default:
      return state;
  }
};
