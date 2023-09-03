import { Card, Box, Text } from "@chakra-ui/react";
import { EmptyData } from "@client/shared/components/molecules/EmptyData";
import { useRouter } from "next/router";
import { useGetTasksQuery } from "@client/shared/slices/tasks/tasks.api";
import { useMemo } from "react";
import TaskTable from "./components/TaskTable";

const TaskViews = () => {
  const router = useRouter();
  const { data: tasks, isLoading } = useGetTasksQuery({});

  const onClickAnalyze = () => router.push("/dashboard/sentiment/analysis");
  const parsedTasks = useMemo(() => {
    if (!tasks?.data) return [];

    const filteredTasks = tasks?.data?.map((task: any) => ({
      status: task.status,
      platform: task.contentPost?.platform,
      title: task.contentPost?.title,
      description: task.contentPost?.description,
      author: task?.author,
      count: task?.contentPost?.responses?.length,
    }));
    return filteredTasks;
  }, [tasks]);

  return (
    <Box height="calc(100vh - 140px)">
      <Card p={4} sx={{ height: "100%" }}>
        <Box sx={{ pl: 4 }}>
          <Text fontSize="2xl">Tasks Overview</Text>
          <Text fontSize="sm">Check the status of your tasks</Text>
        </Box>
        {parsedTasks.length === 0 && !isLoading && (
          <Box sx={{ height: "100%" }} display="flex" justifyContent="center">
            <EmptyData
              title="No Processed Tasks"
              subtitle="Analyze some content, to start a task"
              cta={{
                label: "Analyze Content",
                onClick: onClickAnalyze,
              }}
            />
          </Box>
        )}
        {parsedTasks.length > 0 && (
          <TaskTable paginationData={tasks?.meta} data={parsedTasks} />
        )}
      </Card>
    </Box>
  );
};

export default TaskViews;
