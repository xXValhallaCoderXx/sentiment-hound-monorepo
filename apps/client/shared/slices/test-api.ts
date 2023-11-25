import { rootApi } from "../root-api";

export const testApi = rootApi.injectEndpoints({
  endpoints: (builder) => ({
    getTest: builder.query<any, void>({
      query: () => "/",
    }),
  }),
  overrideExisting: false,
});

export const { useGetTestQuery } = testApi;