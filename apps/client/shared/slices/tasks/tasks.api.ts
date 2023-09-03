import { rootApi } from "../root-api";
import { ITask } from "./tasks.types";
import { IPagination } from "../root-types";

interface IGetTasksResponse {
  data: ITask[];
  meta: IPagination;
}

const taskApi = rootApi.injectEndpoints({
  endpoints: (builder) => ({
    getTasks: builder.query<IGetTasksResponse, any>({
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

export const { useGetTasksQuery, useLazyGetTasksQuery } = taskApi;
