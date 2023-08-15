import { rootApi } from "../root-api";

interface IGetAnalysisParams {
  sentiment?: string[];
}

const analysisApi = rootApi.injectEndpoints({
  endpoints: (builder) => ({
    getSentiment: builder.query<IGetAnalysisParams, any>({
      query: ({ videoId }) => ({
        url: "/sentiment",
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
