import { rootApi } from "../root-api";

export interface IGetAnalysisParams {
  platform: "youtube" | "twitter";
  id: string;
}

const analysisApi = rootApi.injectEndpoints({
  endpoints: (builder) => ({
    startAnalysis: builder.mutation<any, IGetAnalysisParams>({
      query: ({ id, platform }) => ({
        url: `/analyze/${platform}`,
        method: "POST",
        body: {
          id,
        },
      }),
      invalidatesTags: ["tasks"],
    }),
  }),
});

export const { useStartAnalysisMutation } = analysisApi;
