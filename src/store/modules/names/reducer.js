import { ADD_NAME, REMOVE_NAME, RESET_NAMES } from "./actionTypes";

const defaultNames = ["John", "Doe", "Anna", "Fulana"];

const namesReducer = (state = defaultNames, { type, updatedNames }) => {
  const cases = [ADD_NAME, REMOVE_NAME, RESET_NAMES];

  return cases.includes(type) ? updatedNames : state;
};

export default namesReducer;
