import { addProductAction, removeProductAction } from "./actions";

export const addProductThunk = (newProduct) => (dispach, getStore) => {
  const { products } = getStore();

  if (newProduct) {
    const updatedProducts = [...products, newProduct];

    dispach(addProductAction(updatedProducts));
  }
};

export const removeProductThunk = (product) => (dispach, getStore) => {
  const { products } = getStore();

  if (product) {
    const updatedProducts = products.filter((name) => name !== product);

    dispach(removeProductAction(updatedProducts));
  }
};
