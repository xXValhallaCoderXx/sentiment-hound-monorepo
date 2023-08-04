import { Card, Box, Heading, Text } from "@chakra-ui/react";
import FilterOverview from "./components/Filter";
import TableOverview from "./components/Table";

const OverviewView = () => {
  return (
    <Box h="calc(100vh - 350px)">
      <Card p={4}>
        <Text fontSize="2xl" fontWeight={500}>
          Sentiment Overview
        </Text>
      </Card>
      <Card mt={4} p={4}>
        <FilterOverview />
      </Card>
      <Card mt={4} p={4} h="100%">
        <TableOverview />
      </Card>
    </Box>
  );
};

export default OverviewView;
