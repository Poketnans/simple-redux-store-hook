import { useSelector } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import useActions from "./modules/rootHook";
import rootReducer from "./modules/rootReducer";

export const store = createStore(rootReducer, applyMiddleware(thunk));

export const useStore = () => ({
  ...useSelector((states) => states),
  ...useActions()
});
