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
  }),
});

export const { useGetSentimentQuery } = analysisApi;
