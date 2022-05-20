import { ADD_PRODUCT, REMOVE_PRODUCT } from "./actionTypes";

const defaultProducts = ["Cell", "Chair", "Shoes", "Pants"];

const productsReducer = (
  state = defaultProducts,
  { type, updatedProducts }
) => {
  const cases = [ADD_PRODUCT, REMOVE_PRODUCT];

  return cases.includes(type) ? updatedProducts : state;
};

export default productsReducer;
