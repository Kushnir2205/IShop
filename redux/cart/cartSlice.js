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
    // addItem: (state, { payload }) => {
    //   const existingItem = state.carts.find((item) => item._id === payload._id);
    //   if (existingItem) {
    //     // Якщо товар вже є в корзині, можете здійснити інші дії, наприклад, збільшити кількість
    //     existingItem.quantity += 1;
    //   } else {
    //     // Якщо товар ще не в корзині, додаємо його
    //     state.carts.push({ ...payload, quantity: 1 });
    //   }
    // },
    removeItem: (state, action) => {
      state.carts = state.carts.filter((item) => item.id !== action.payload.id);
    },
  },
});

export const cartReducer = cartSlice.reducer;
export const cartActions = cartSlice.actions;
