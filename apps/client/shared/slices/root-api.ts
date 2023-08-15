import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const rootApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:4000/" }),
  tagTypes: ["tasks", "sentiment", "content-response"],
  endpoints: (builder) => ({}),
});
