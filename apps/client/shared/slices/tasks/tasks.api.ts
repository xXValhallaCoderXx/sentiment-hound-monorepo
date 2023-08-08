import { rootApi } from "../root-api";

const taskApi = rootApi.injectEndpoints({
  endpoints: (builder) => ({
    getTasks: builder.query<any, any>({
      query: () => ({
        url: "/task",
        method: "GET",
        params: {
          page: 1,
          pageSize: 10,
        },
      }),
      providesTags: ["tasks"],
    }),
  }),
});

export const { useGetTasksQuery } = taskApi;
