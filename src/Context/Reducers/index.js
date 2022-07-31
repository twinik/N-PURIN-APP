import AuthReducer from "./AuthReducer";
import FunctionalDataReducer from "./FunctionalDataReducer";

function combineReducers(reducers) {
  return (state = {}, action) => {
    const newState = {};
    for (let key in reducers) {
      newState[key] = reducers[key](state[key], action);
    }
    return newState;
  };
}

export const rootReducer = combineReducers({
  data:AuthReducer,
  functionalData:FunctionalDataReducer
});
