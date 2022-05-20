import { addName, removeName, resetNames } from "./actions";

export const addNameThunk = (newName) => {
  return (dispatch, getStore) => {
    const { names } = getStore();

    if (newName) {
      const updatedNamesList = [...names, newName];

      dispatch(addName(updatedNamesList));
    }
  };
};

export const removeNameThunk = (removingName) => {
  return (dispatch, getStore) => {
    const { names } = getStore();

    const updatedNamesList = names.filter((name) => name !== removingName);

    dispatch(removeName(updatedNamesList));
  };
};

export const resetNamesThunk = () => {
  return (dispatch, getStore) => {
    const updatedNamesList = [];

    dispatch(resetNames(updatedNamesList));
  };
};
