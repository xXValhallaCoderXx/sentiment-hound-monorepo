import { rootApi } from "../root-api";

interface IGetAnalysisParams {
  platform: "youtube" | "twitter";
  id: string;
}

const analysisApi = rootApi.injectEndpoints({
  endpoints: (builder) => ({
    startAnalysis: builder.mutation<IGetAnalysisParams, any>({
      query: ({ id, platform }) => ({
        url: `/sentiment/${platform}`,
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
