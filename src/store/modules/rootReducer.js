import { combineReducers } from "redux";
import namesReducer from "./names/reducer";
import productsReducer from "./products/reducer";

const rootReducer = combineReducers({
  names: namesReducer,
  products: productsReducer
});

export default rootReducer;
