import { useNamesActions } from "./names/hook";

const useActions = () => ({
  ...useNamesActions()
});

export default useActions;
