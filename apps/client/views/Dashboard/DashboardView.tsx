import { Card, Box, SimpleGrid, Text, Flex } from "@chakra-ui/react";
import TableRecentSentiment from "./components/TableRecentSentiment";
import SentimentOverview from "./components/SentimentOverview";
import NewFeatures from "./components/NewFeatures";
import { useDisclosure } from "@chakra-ui/react";
import ModalRoadmap from "./components/ModalRoadmap";
import TableRecentAspects from "./components/RecentAspects";
import { useGetSentimentTotalQuery } from "@client/shared/slices/sentiment/sentiment-api";
import { useGetContentResponsesQuery } from "@client/shared/slices/content-responses/content-responses.api";
import { useMemo } from "react";

const DashboardView = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { data: sentimentTotal } = useGetSentimentTotalQuery({});
  const { data: contentResponses } = useGetContentResponsesQuery({
    params: {
      size: 5,
    },
  });

  console.log("SENTI: ", sentimentTotal);

  const parseContentResponses = useMemo(() => {
    if (contentResponses?.data?.length === 0 || !contentResponses) return [];

    return contentResponses?.data?.map((response) => ({
      platform: response.platform,
      sentiment: response.sentiment,
      comment: response.content,
    }));
  }, [contentResponses]);

  return (
    <Box>
      <Flex flexDirection={{ lg: "row", sm: "column" }} gap={10}>
        <Box w={{ base: "100%", md: "100%", lg: "33.3%", xl: "25%" }}>
          <Card onClick={onOpen} sx={{ height: "100%" }}>
            <NewFeatures />
          </Card>
        </Box>
        <Box w={{ base: "100%", sm: "100%", lg: "66.6%", xl: "75%" }}>
          <Card>
            <SentimentOverview {...sentimentTotal} />
          </Card>
        </Box>
      </Flex>
      <Flex mt={8} gap={10} flexDirection={{ lg: "row", sm: "column" }}>
        <Card p={4} w={{ lg: "66.6%", sm: "100%" }}>
          <Text mb={2} fontWeight={500} fontSize="2xl">
            Recent Sentiment
          </Text>
          <TableRecentSentiment data={parseContentResponses} />
        </Card>
        <Card p={4} w={{ lg: "33.3%", sm: "100%" }}>
          <Text mb={2} fontWeight={500} fontSize="2xl">
            Aspect Overview
          </Text>
          <TableRecentAspects data={[]} />
        </Card>
      </Flex>
      <ModalRoadmap isOpen={isOpen} onClose={onClose} />
    </Box>
  );
};

export default DashboardView;
