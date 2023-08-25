import { useState, useEffect } from "react";
import {
  useGetTasksQuery,
  useLazyGetTasksQuery,
} from "../slices/tasks/tasks.api";
import { useAppDispatch } from "../lib/store";
import { setSyncing } from "../slices/tasks/tasks.state";
const useTaskSync = () => {
  const [polling, setPolling] = useState(5000);
  const dispatch = useAppDispatch();
  const [
    getTasksTrigger,
    { data: tasks, isFetching, isError: isTasksError, error: tasksError },
  ] = useLazyGetTasksQuery({ pollingInterval: polling });

  useEffect(() => {
    dispatch(setSyncing(true));
    getTasksTrigger({}, false);
  }, []);

  useEffect(() => {
    console.log("TASKS: ", tasks);
  }, [tasks]);

  return { hello: "" };
};

export default useTaskSync;
