import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://ishop-backend-5skc.onrender.com/api",
  }),
  endpoints: (builder) => ({
    fetchAllGudget: builder.query({
      query: (params) => "store",
    }),
    fetchById: builder.query({
      query: (gudgetId) => `store/${gudgetId}`,
    }),
    fetchAddGudget: builder.mutation({
      query: (info) => ({
        url: "store",
        method: "POST",
        body: info,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }),
    }),
    fetchDeleteItem: builder.mutation({
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
