import { useMemo } from "react";
import { useGetContentQuery } from "@client/shared/slices/content/content.api";
import { Box, Card, Text } from "@chakra-ui/react";
import { EmptyData } from "@client/shared/components/molecules/EmptyData";
import ContentTable from "./components/ContentTable";
import { useRouter } from "next/router";

const ContentPageView = () => {
  const router = useRouter();
  const { data: content, isLoading } = useGetContentQuery({});
  const onClickAnalyze = () => router.push("/dashboard/sentiment/analysis");
  const parsedTasks = useMemo(() => {
    if (!content) return [];

    const parsedTasks = content?.data?.map((task: any) => ({
      platform: task?.platform,
      title: task?.title,
      description: task?.description,
      author: task?.author,
      count: 1,
    }));
    return parsedTasks;
  }, [content]);

  return (
    <Box height="calc(100vh - 140px)">
      <Card p={4} sx={{ height: "100%" }}>
        <Box sx={{ pl: 4 }}>
          <Text fontSize="2xl">Analyzed Posts</Text>
          <Text fontSize="sm">List of your previously analyzed content</Text>
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
          <ContentTable paginationData={content?.meta} data={parsedTasks} />
        )}
      </Card>
    </Box>
  );
};

export default ContentPageView;
