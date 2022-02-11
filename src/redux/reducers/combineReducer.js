import { combineReducers } from "redux";
import { reducer } from "./reducer";
import { authReducer } from "./auth.reducer";

const comReducer = combineReducers({
  allMember: reducer,
  authReducer: authReducer,
});

export default comReducer;
