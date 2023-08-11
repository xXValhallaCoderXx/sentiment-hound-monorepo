import { useGetContentQuery } from "@client/shared/slices/content/content.api";
import { Box, Card, Text } from "@chakra-ui/react";
import ContentPostTable from "./components/ContentPostTable";

const ContentPageView = () => {
  const { data: content, isLoading } = useGetContentQuery({});
  return (
    <Card p={4}>
      <Text fontSize="2xl" fontWeight={500}>
        Analyzed Posts
      </Text>
      <Box>
        <ContentPostTable data={content ?? []} />
      </Box>
    </Card>
  );
};

export default ContentPageView;
