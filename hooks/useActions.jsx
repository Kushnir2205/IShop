import { bindActionCreators } from "@reduxjs/toolkit";
import cartActions from "../redux/cart/cartSlice";
import { useDispatch } from "react-redux";

const allActions = {
  ...cartActions,
};

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(allActions, dispatch);
};
