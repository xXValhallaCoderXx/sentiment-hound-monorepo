import { Card, Box, Heading, Text } from "@chakra-ui/react";
import FilterOverview from "./components/Filter";
import TableOverview from "./components/Table";

const OverviewView = () => {
  return (
    <Box overflow="hidden">
      <Card p={4}>
        <Text fontSize="2xl" fontWeight={500}>
          Sentiment Overview
        </Text>
      </Card>
      <Card mt={4} p={6}>
        <FilterOverview />
      </Card>

      <TableOverview />
    </Box>
  );
};

export default OverviewView;
