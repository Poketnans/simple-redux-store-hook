import { useSelector } from "react-redux";
import { combineReducers, applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { useNamesActions } from "./modules/names/hook";
import namesReducer from "./modules/names/reducer";

const reducers = combineReducers({
  names: namesReducer
});

export const store = createStore(reducers, applyMiddleware(thunk));

export const useStore = () => ({
  ...useSelector((store) => store),
  ...useNamesActions()
});
