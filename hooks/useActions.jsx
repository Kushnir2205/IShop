import { bindActionCreators } from "@reduxjs/toolkit";
import cartActions from "../redux/cart/cartSlice";

const allActions = {
  ...cartActions,
};

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(allActions, dispatch);
};
