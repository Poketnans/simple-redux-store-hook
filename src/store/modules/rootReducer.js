import { combineReducers } from "redux";
import namesReducer from "./names/reducer";

const rootReducer = combineReducers({
  names: namesReducer
});

export default rootReducer;
