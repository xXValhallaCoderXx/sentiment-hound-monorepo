import { rootApi } from "../root-api";

export const testApi = rootApi.injectEndpoints({
  endpoints: (builder) => ({
    getTest: builder.query<any, void>({
      query: () => "/post",
    }),
  }),
  overrideExisting: false,
});

export const { useGetTestQuery } = testApi;