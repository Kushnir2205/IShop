import { bindActionCreators } from "@reduxjs/toolkit";
import { cartActions } from "../redux/cart/cartSlice";
import { useDispatch } from "react-redux";
console.log(cartActions);
const allActions = {
  ...cartActions,
};

export const useActions = () => {
  const dispatch = useDispatch();
  const a = bindActionCreators(allActions, dispatch);
  console.log(a, cartActions);
  return a;
};
