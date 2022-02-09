import { combineReducers } from "redux";
import { reducer } from "./reducer";

const comReducer = combineReducers({
  allMember: reducer,
});

export default comReducer;
