import { ADD_NAME, REMOVE_NAME } from "./actionTypes";

export const addName = (updatedNames) => ({
  type: ADD_NAME,
  updatedNames
});

export const removeName = (updatedNames) => ({
  type: REMOVE_NAME,
  updatedNames
});
