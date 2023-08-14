import { useGetContentDetailQuery } from "@client/shared/slices/content/content.api";
import { useRouter } from "next/router";
import ContentInfo from "./components/ContentInfo";
import ContentTable from "./components/ContentTable";
import { Text, Box, Spinner } from "@chakra-ui/react";

const ContentDetailView = () => {
  const router = useRouter();
  const id = router.query.id;
  const { data, isLoading } = useGetContentDetailQuery(
    { id: String(id) },
    { skip: !id }
  );

  if (isLoading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        height="80vh"
      >
        <Text fontSize="3xl" fontWeight={500} mb={2}>
          Feeding Gooby Treats...
        </Text>
        <Spinner />
      </Box>
    );
  }

  return (
    <Box
      display="flex"
      flexDirection="column"
      overflowX="scroll"
      gap={6}
      style={{ height: "100%" }}
    >
      <Box maxHeight={300} flexBasis="20%">
        <ContentInfo
          image={data?.image}
          publishedAt={data?.publishedAt || ""}
          title={data?.title || ""}
          sentiment={{
            positive: data?.sentimentCounts.positive || 0,
            negative: data?.sentimentCounts.negative || 0,
            neutral: data?.sentimentCounts.neutral || 0,
          }}
        />
      </Box>
      <Box sx={{ overflowX: "scroll" }} flexBasis="80%">
        <ContentTable data={data?.responses} />
      </Box>
    </Box>
  );
};

export default ContentDetailView;
