import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

console.log("BASE URL", process.env.NEXT_PUBLIC_API_URL);
export const rootApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_API_URL}/`,
  }),
  endpoints: (builder) => ({}),
});
