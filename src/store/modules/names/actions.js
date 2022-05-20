import { ADD_NAME, REMOVE_NAME, RESET_NAMES } from "./actionTypes";

export const addName = (updatedNames) => ({
  type: ADD_NAME,
  updatedNames
});

export const removeName = (updatedNames) => ({
  type: REMOVE_NAME,
  updatedNames
});

export const resetNames = (updatedNames) => ({
  type: RESET_NAMES,
  updatedNames
});
