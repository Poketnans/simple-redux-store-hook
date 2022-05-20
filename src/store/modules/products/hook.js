import { useDispatch } from "react-redux";
import { addProductThunk, removeProductThunk } from "./thunks";

const useProductsActions = () => {
  const dispach = useDispatch();

  const addProduct = (newProduct) => dispach(addProductThunk(newProduct));

  const removeProduct = (product) => dispach(removeProductThunk(product));

  return { addProduct, removeProduct };
};

export default useProductsActions;
