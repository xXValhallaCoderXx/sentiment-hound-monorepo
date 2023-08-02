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
      <Flex flexDirection={{ lg: "row", sm: "column" }} gap={10}>
        <Box w={{ base: "100%", md: "100%", lg: "33.3%", xl: "25%" }}>
          <Card onClick={onOpen}>
            <NewFeatures />
          </Card>
        </Box>
        <Box w={{ base: "100%", sm: "100%", lg: "66.6%", xl: "75%" }}>
          <Card>
            <SentimentOverview />
          </Card>
        </Box>
      </Flex>
      <Flex mt={8} gap={10} flexDirection={{ lg: "row", sm: "column" }}>
        <Card p={4} w={{ lg: "66.6%", sm: "100%" }}>
          <Text mb={2} fontSize="2xl">
            Recent Sentiment
          </Text>
          <TableRecentSentiment />
        </Card>
        <Card p={4} w={{ lg: "33.3%", sm: "100%" }}>
          <Text mb={2} fontSize="2xl">
            Aspect Overview
          </Text>
        </Card>
      </Flex>
      <ModalRoadmap isOpen={isOpen} onClose={onClose} />
    </Box>
  );
};

export default DashboardView;
