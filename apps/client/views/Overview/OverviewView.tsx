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
import GraphTab from "./tabs/Graph/GraphTab";
import TableTab from "./tabs/Table/TableTab";
import { EmptyData } from "@client/shared/components/molecules/EmptyData";
import { useLazyGetSentimentQuery } from "@client/shared/slices/sentiment/sentiment-api";
import { useEffect } from "react";

const OverviewView = () => {
  // const { data, isLoading } = useGetSentimentQuery({});
  const [triggerSentimentApi, sentimentApiResponse] =
    useLazyGetSentimentQuery();

  const parsedTasks = ["ss"];
  const isLoading = false;
  const data: any = {};
  useEffect(() => {
    triggerSentimentApi({ size: 10 });
  }, []);

  const handleOnFilterChange = (_data: any) => {
    console.log("DATA: ", _data);
    // @ts-ignore
    triggerSentimentApi({ ..._data });
  };
  console.log("sentimentApiResponse : ", sentimentApiResponse.data?.data);
  return (
    <Box
      display="flex"
      flexDirection="column"
      overflowX="scroll"
      gap={6}
      style={{ height: "100%" }}
    >
      <Card
        p={4}
        maxHeight={300}
        flexBasis="20%"
        display="flex"
        justifyContent="space-between"
      >
        <Box>
          <Text fontSize="2xl" fontWeight={500}>
            Sentiment Overview
          </Text>
          <Text fontSize="sm" mt={-1} mb={2} colorScheme="gray">
            Overview of all your analyzed content
          </Text>
        </Box>
        <FilterOverview onChange={handleOnFilterChange} />
      </Card>
      <Box sx={{ overflowX: "scroll", overflowY: "none" }} flexBasis="80%">
        <Tabs sx={{ mt: 2, height: "100%", overflowY: "none" }}>
          <TabList sx={{ mb: 4, overflowY: "none" }}>
            <Tab>Grid</Tab>
            <Tab>Graphs</Tab>
          </TabList>

          <TabPanels sx={{ height: "100%", overflowY: "none" }}>
            <TabPanel sx={{ height: "100%", p: 0, overflowY: "none" }}>
              <Card sx={{ height: "100%", p: 4, overflowY: "none" }}>
                World
              </Card>
              {/* <TableTab
                        data={sentimentApiResponse.data?.data ?? []}
                        paginationData={sentimentApiResponse?.data?.meta ?? {}}
                      /> */}
            </TabPanel>
            <TabPanel sx={{ height: "100%", p: 0, overflowY: "none" }}>
              <Card sx={{ height: "100%", p: 4, overflowY: "none" }}>
                Hello
              </Card>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
      {/* <Card sx={{ overflowX: "scroll" }} flexBasis="80%"> */}
      {/* <Box height="calc(100vh - 140px)">
          <Card p={4} sx={{ height: "100%" }}>
            {parsedTasks.length === 0 && !isLoading && (
              <Box
                sx={{ height: "100%" }}
                display="flex"
                justifyContent="center"
              >
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
              <Box mt={1} p={4}>
                <Tabs sx={{ mt: 6 }}>
                  <TabList>
                    <Tab>Grid</Tab>
                    <Tab>Graphs</Tab>
                  </TabList>

                  <TabPanels>
                    <TabPanel>
                      <TableTab
                        data={sentimentApiResponse.data?.data ?? []}
                        paginationData={sentimentApiResponse?.data?.meta ?? {}}
                      />
                    </TabPanel>
                    <TabPanel>
                      <GraphTab />
                    </TabPanel>
                  </TabPanels>
                </Tabs>
              </Box>
            )}
          </Card>
        </Box> */}

      {/* </Card> */}
    </Box>
  );
};

export default OverviewView;
