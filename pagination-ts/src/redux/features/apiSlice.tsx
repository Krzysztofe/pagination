import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { URL_API } from "../../data/url";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: URL_API }),
  endpoints: (builder) => ({
    getAllData: builder.query({ 
      query: () => "",
    }),
  }),
});

export const { useGetAllDataQuery } = productsApi;
