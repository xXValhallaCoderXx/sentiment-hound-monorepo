import { rootApi } from "../root-api";
import { IContentResponse } from "../content-responses/content-response.types";

interface IGetAnalysisParams {
  data: IContentResponse[];
  meta: any;
}

const analysisApi = rootApi.injectEndpoints({
  endpoints: (builder) => ({
    getSentiment: builder.query<IGetAnalysisParams, any>({
      query: ({ videoId }) => ({
        url: "/content-post-response",
        method: "GET",
      }),
      providesTags: ["sentiment"],
    }),
    getSentimentTotal: builder.query<any, any>({
      query: () => ({
        url: "/content-post-response/sentiment",
        method: "GET",
      }),
      providesTags: ["sentiment"],
    }),
  }),
});

export const { useGetSentimentQuery, useGetSentimentTotalQuery } = analysisApi;
