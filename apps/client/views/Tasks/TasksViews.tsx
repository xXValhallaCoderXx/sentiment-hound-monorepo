import { Card, Box, Text } from "@chakra-ui/react";
import { EmptyData } from "@client/shared/components/molecules/EmptyData";

import { useGetTasksQuery } from "@client/shared/slices/tasks/tasks.api";
import { useMemo } from "react";
import TaskTable from "./components/TaskTable";

const TaskViews = () => {
  const { data: tasks, isLoading } = useGetTasksQuery(
    {},
    { pollingInterval: 3000 }
  );

  const parsedTasks = useMemo(() => {
    const filteredTasks = tasks?.data
      ?.filter((task: any) => task.status !== "completed")
      .map((task: any) => ({
        status: task.status,
        platform: task.contentPost?.platform,
      }));
    return filteredTasks;
  }, [tasks]);
  console.log(parsedTasks);
  return (
    <Box>
      <Card p={4}>
        <Text fontSize="2xl">Tasks Overview</Text>
        <Text fontSize="sm">
          Check the progress of your current running tasks
        </Text>
      </Card>
      <Card mt={5}>
        {isLoading ? (
          <div>Loading</div>
        ) : parsedTasks.length === 0 ? (
          <Box height={500} display="flex" justifyContent="center">
            <EmptyData
              title="No Running Tasks"
              subtitle="Analyze some content, to start a task"
            />
          </Box>
        ) : (
          <div>
            <TaskTable data={parsedTasks} />
          </div>
        )}
      </Card>
    </Box>
  );
};

export default TaskViews;
