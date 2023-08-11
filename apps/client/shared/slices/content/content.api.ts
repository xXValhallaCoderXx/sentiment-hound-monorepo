import { rootApi } from "../root-api";
import { IContentPost } from "./content.types";
interface IGetContentDetailParams {
  id: string;
}

const contentApi = rootApi.injectEndpoints({
  endpoints: (builder) => ({
    getContent: builder.query<any, any>({
      query: () => ({
        url: `/content-post`,
      }),
    }),
    getContentDetail: builder.query<IContentPost, IGetContentDetailParams>({
      query: ({ id }) => ({
        url: `/content-post/${id}`,
      }),
    }),
  }),
});

export const { useGetContentQuery, useGetContentDetailQuery } = contentApi;
