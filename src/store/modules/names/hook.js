import { useDispatch } from "react-redux";
import { addNameThunk, removeNameThunk } from "./thunks";

export const useNamesActions = () => {
  const dispatch = useDispatch();

  const addName = (newName) => dispatch(addNameThunk(newName));

  const removeName = (name) => dispatch(removeNameThunk(name));

  return {
    addName,
    removeName
  };
};
