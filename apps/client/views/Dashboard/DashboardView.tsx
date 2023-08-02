import { Card, Box, SimpleGrid, Text, Flex } from "@chakra-ui/react";
import TableRecentSentiment from "./components/TableRecentSentiment";
import SentimentOverview from "./components/SentimentOverview";
import NewFeatures from "./components/NewFeatures";
import { useDisclosure } from "@chakra-ui/react";
import ModalRoadmap from "./components/ModalRoadmap";
const DashboardView = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box>
      <Text fontSize="3xl" sx={{ mb: 4 }}>
        Dashboard
      </Text>
      <Flex flexDirection={{ md: "row", sm: "column" }} gap={10}>
        <Box w={{ md: "33.3%", sm: "100%" }}>
          <Card onClick={onOpen}>
            <NewFeatures />
          </Card>
        </Box>
        <Box w={{ md: "66.6%", sm: "100%" }}>
          <Card>
            <SentimentOverview />
          </Card>
        </Box>
      </Flex>
      <Flex mt={8} gap={10} flexDirection={{ md: "row", sm: "column" }}>
        <Card p={4} w={{ md: "66.6%", sm: "100%" }}>
          <Text mb={2} fontSize="2xl">
            Recent Sentiment
          </Text>
          <TableRecentSentiment />
        </Card>
        <Card p={4} w={{ md: "33.3%", sm: "100%" }}>
          <Text mb={2} fontSize="2xl">
            Overview
          </Text>
        </Card>
      </Flex>
      <ModalRoadmap isOpen={isOpen} onClose={onClose} />
    </Box>
  );
};

export default DashboardView;
