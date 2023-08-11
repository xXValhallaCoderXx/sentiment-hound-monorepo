import { rootApi } from "../root-api";

const contentApi = rootApi.injectEndpoints({
  endpoints: (builder) => ({
    getContent: builder.query<any, any>({
      query: ({ id }) => ({
        url: `/content-post`,
      }),
    }),
  }),
});

export const { useGetContentQuery } = contentApi;
