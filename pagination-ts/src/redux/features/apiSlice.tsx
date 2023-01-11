import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://reqres.in/api/products" }),
  endpoints: builder => ({
    getAllProducts: builder.query({
      query: () => "",
    }),
  }),
});

export const { useGetAllProductsQuery } = productsApi;
