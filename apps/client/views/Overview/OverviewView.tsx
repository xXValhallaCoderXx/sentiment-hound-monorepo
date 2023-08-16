import {
  Card,
  Box,
  Text,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
} from "@chakra-ui/react";
import FilterOverview from "./components/Filter";
import GraphTab from "./tabs/GraphTab";
import TableTab from "./tabs/TableTab";
import { EmptyData } from "@client/shared/components/molecules/EmptyData";
import { useGetSentimentQuery } from "@client/shared/slices/sentiment/sentiment-api";

const OverviewView = () => {
  const { data, isLoading } = useGetSentimentQuery({});
  console.log("SENTIMENT: ", data);
  const parsedTasks = ["ss"];
  return (
    <Box height="calc(100vh - 140px)">
      <Card p={4} sx={{ height: "100%" }}>
        <Box sx={{ pl: 4 }}>
          <Text fontSize="2xl" fontWeight={500}>
            Sentiment Overview
          </Text>
        </Box>
        {parsedTasks.length === 0 && !isLoading && (
          <Box sx={{ height: "100%" }} display="flex" justifyContent="center">
            <EmptyData
              title="No Processed Tasks"
              subtitle="Analyze some content, to start a task"
              cta={{
                label: "Analyze Content",
                onClick: () => console.log("Click"),
              }}
            />
          </Box>
        )}
        {parsedTasks.length > 0 && (
          <Box mt={4} p={4}>
            <FilterOverview />
            <Tabs sx={{ mt: 6 }}>
              <TabList>
                <Tab>Grid</Tab>
                <Tab>Graphs</Tab>
              </TabList>

              <TabPanels>
                <TabPanel>
                  <TableTab />
                </TabPanel>
                <TabPanel>
                  <GraphTab />
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Box>
        )}
      </Card>
    </Box>
  );
};

export default OverviewView;
