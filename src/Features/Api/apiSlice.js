import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "stockItems",
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_BACK_END_URL}pos`,
  }),
  endpoints(builder) {
    return {
      fetchStockItems: builder.query({
        query() {
          return "/stockItems";
        },
      }),
    };
  },
});

export const { useFetchStockItemsQuery } = apiSlice;
