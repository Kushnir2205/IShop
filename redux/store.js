import { configureStore } from "@reduxjs/toolkit";
import { api } from "./productsApi/productsApi";

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export default store;
