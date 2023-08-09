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

  console.log(tasks);

  const parsedTasks = useMemo(() => {
    if (!tasks?.data) return [];

    const filteredTasks = tasks?.data?.map((task: any) => ({
      status: task.status,
      platform: task.contentPost?.platform,
      title: task.contentPost?.title,
      description: task.contentPost?.description,
      author: task?.author,
    }));
    return filteredTasks;
  }, [tasks]);

  return (
    <Box height="calc(100vh - 140px)">
      <Card p={4} sx={{ height: "100%" }}>
        <Text fontSize="2xl">Tasks Overview</Text>
        <Text fontSize="sm">Check the status of your tasks</Text>
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
        {parsedTasks.length > 0 && <TaskTable data={parsedTasks} />}
      </Card>
      {/* <Card p={4}>
      
       
      </Card>
      <Card mt={5}>
        {isLoading ? (
          <div>Loading</div>
        ) : [].length === 0 ? (
          <Box height={500} display="flex" justifyContent="center">
            <EmptyData
              title="No Running Tasks"
              subtitle="Analyze some content, to start a task"
            />
          </Box>
        ) : (
          <div>
            <TaskTable data={[]} />
          </div>
        )}
      </Card> */}
    </Box>
  );
};

export default TaskViews;
