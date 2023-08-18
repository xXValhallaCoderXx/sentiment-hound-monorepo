import { rootApi } from "../root-api";
import { IContentResponse } from "../content-responses/content-response.types";

interface IGetAnalysisParams {
  data: IContentResponse[];
  meta: any;
}

interface IGetSentimentParams {
  sentiment?: string[];
  date?: string;
  platform?: string[];
  page?: number;
  size?: number;
}

const analysisApi = rootApi.injectEndpoints({
  endpoints: (builder) => ({
    getSentiment: builder.query<IGetAnalysisParams, IGetSentimentParams>({
      query: (params) => {
        console.log("PARAMS : ", params);
        return {
          url: "/content-post-response",
          method: "GET",
          params,
        };
      },
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

export const {
  useGetSentimentQuery,
  useGetSentimentTotalQuery,
  useLazyGetSentimentQuery,
} = analysisApi;
