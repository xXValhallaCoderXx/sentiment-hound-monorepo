import { rootApi } from "../root-api";

interface IGetAnalysisParams {
  videoId: string;
}

const analysisApi = rootApi.injectEndpoints({
  endpoints: (builder) => ({
    getAnalysis: builder.mutation<IGetAnalysisParams, any>({
      query: ({ videoId }) => ({
        url: "/sentiment/youtube",
        method: "POST",
        body: {
          videoId,
        },
      }),
      invalidatesTags: ["tasks"],
    }),
  }),
});

export const { useGetAnalysisMutation } = analysisApi;
