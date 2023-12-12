"use client";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://ishop-backend-5skc.onrender.com/api",
  }),
  endpoints: (builder) => ({
    fetchAllGudget: builder.query({
      query: ({ params }) => ({
        url: `/store?category=${params}`,
        method: "GET",
      }),
      // providesTags: ({ notices } = {}) => {
      //   return notices
      //     ? [
      //         ...notices.map(({ _id }) => ({ type: 'AllNotice', id: _id })),
      //         [
      //           { type: 'myNotice', id: 'List' },
      //           { type: 'favoriteNotice', id: 'List' },
      //           { type: 'AllNotice', id: 'List' },
      //         ],
      //       ]
      //     : [
      //         { type: 'myNotice', id: 'List' },
      //         { type: 'favoriteNotice', id: 'List' },
      //         { type: 'AllNotice', id: 'List' },
      //       ];
      // },
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
