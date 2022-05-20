import { useNamesActions } from "./names/hook";
import useProductsActions from "./products/hook";

const useActions = () => ({
  ...useNamesActions(),
  ...useProductsActions()
});

export default useActions;
