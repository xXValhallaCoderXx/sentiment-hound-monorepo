import {
  Card,
  Box,
  Heading,
  Text,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
} from "@chakra-ui/react";
import FilterOverview from "./components/Filter";
import TableOverview from "./components/Table";
import GraphView from "./GraphView";
import { useGetSentimentQuery } from "@client/shared/slices/sentiment/sentiment-api";

const OverviewView = () => {
  const { data, isLoading } = useGetSentimentQuery({});
  console.log("SENTIMENT: ", data);

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

      <Tabs sx={{ mt: 6 }}>
        <TabList>
          <Tab>Grid</Tab>
          <Tab>Graphs</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <TableOverview />
          </TabPanel>
          <TabPanel>
            <GraphView />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default OverviewView;
