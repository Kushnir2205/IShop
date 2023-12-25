import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://ishop-backend-5skc.onrender.com/api",
  }),
  endpoints: (build) => ({
    fetchAllGudget: build.query({
      query: (bodyData) => ({
        url: `/store`,
        method: "GET",
        params: bodyData,
      }),
    }),
    fetchById: build.query({
      query: (gudgetId) => `store/${gudgetId}`,
    }),
    fetchAddGudget: build.mutation({
      query: (info) => ({
        url: "store",
        method: "POST",
        body: info,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }),
    }),
    fetchDeleteItem: build.mutation({
      query: (gudgetId) => ({
        url: `store/${gudgetId}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useFetchAllGudgetQuery,
  useFetchByIdQuery,
  useFetchAddGudgetMutation,
  useFetchDeleteItemMutation,
} = api;
