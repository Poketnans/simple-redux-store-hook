import { ADD_PRODUCT, REMOVE_PRODUCT } from "./actionTypes";

export const addProductAction = (updatedProducts) => ({
  type: ADD_PRODUCT,
  updatedProducts
});

export const removeProductAction = (updatedProducts) => ({
  type: REMOVE_PRODUCT,
  updatedProducts
});
