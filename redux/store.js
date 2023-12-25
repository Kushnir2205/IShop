import { configureStore } from "@reduxjs/toolkit";
import { api } from "./productsApi/productsApi";
import { cartReducer } from "./cart/cartSlice";

export const store = configureStore({
  reducer: { [api.reducerPath]: api.reducer, cart: cartReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export default store;
