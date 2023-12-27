import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  carts: [],
};
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, { payload }) => {
      state.carts = [...state.carts, payload];
    },
    removeItem: (state, action) => {
      state.carts = state.carts.filter((item) => item.id !== action.payload.id);
    },
  },
});

export const cartReducer = cartSlice.reducer;
export const cartActions = cartSlice.actions;
