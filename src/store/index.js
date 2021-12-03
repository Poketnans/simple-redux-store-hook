import { useSelector } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { useNamesActions } from "./modules/names/hook";
import rootReducer from "./modules/rootReducer";

export const store = createStore(rootReducer, applyMiddleware(thunk));

export const useStore = () => ({
  ...useSelector((store) => store),
  ...useNamesActions()
});
