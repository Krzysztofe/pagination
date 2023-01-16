import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { URL_API } from "../../data/url";
import { Data } from "../../models/fetchDataModels";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: URL_API }),
  endpoints: builder => ({
    getAllData: builder.query<Data | null, void>({
      query: () => "",
    }),
  }),
});

export const { useGetAllDataQuery } = productsApi;
