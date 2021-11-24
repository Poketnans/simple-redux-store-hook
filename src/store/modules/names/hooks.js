import { useDispatch } from "react-redux";
import { addNameThunk, removeNameThunk } from "./thunks";

const useAddName = () => {
  const dispatch = useDispatch();

  const addName = (newName) => dispatch(addNameThunk(newName));

  return { addName };
};

const useRemoveName = () => {
  const dispatch = useDispatch();

  const removeName = (name) => dispatch(removeNameThunk(name));

  return { removeName };
};

export const useNamesActions = () => ({
  ...useAddName(),
  ...useRemoveName()
});
