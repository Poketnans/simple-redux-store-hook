import { useDispatch } from "react-redux";
import { addNameThunk, removeNameThunk, resetNamesThunk } from "./thunks";

export const useNamesActions = () => {
  const dispatch = useDispatch();

  const addName = (newName) => dispatch(addNameThunk(newName));

  const removeName = (name) => dispatch(removeNameThunk(name));

  const resetNames = (name) => dispatch(resetNamesThunk());

  return {
    addName,
    removeName,
    resetNames
  };
};
