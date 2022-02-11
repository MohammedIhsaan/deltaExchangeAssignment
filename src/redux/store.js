import { createStore, applyMiddleware } from "redux";
import comReducer from "./reducers/combineReducer";
import thunk from "redux-thunk";
import { composeWithDevTools } from "@redux-devtools/extension";

const store = createStore(
  comReducer,
  {},
  composeWithDevTools(applyMiddleware(thunk))
);
export default store;
