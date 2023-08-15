import { rootApi } from "../root-api";
import { IContentResponse } from "./content-response.types";

interface IGetAnalysisParams {
  sentiment?: string[];
}

interface IContentResponseParams {
  params?: {
    page?: number;
    size?: number;
  };
}

interface IContentResponsApi {
  data: IContentResponse[];
  meta: any;
}

const contentResponseApi = rootApi.injectEndpoints({
  endpoints: (builder) => ({
    getContentResponses: builder.query<
      IContentResponsApi,
      IContentResponseParams
    >({
      query: ({ params }) => ({
        url: "/content-post-response",
        method: "GET",
        params,
      }),
      providesTags: ["content-response"],
    }),
  }),
});

export const { useGetContentResponsesQuery } = contentResponseApi;
