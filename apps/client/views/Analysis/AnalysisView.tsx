import { EmptyData } from "@client/shared/components/molecules/EmptyData";
import { Card, Box, Button, Text, Flex, Input, Fade } from "@chakra-ui/react";

const AnalysisView = () => {
  const data = [];
  return (
    <Box>
      <Flex flexDirection={{ lg: "row", sm: "column" }} gap={10}>
        <Box w={{ base: "100%", md: "100%", lg: "60%" }}>
          <Card p={6}>
            <Text mt={-2} fontSize="2xl" fontWeight={600}>
              Social Analysis
            </Text>
            <Text color="gray.500" fontSize="xs">
              Enter a Youtube or Twitter URL to fetch its sentiment
            </Text>
            <Box mt={4}>
              <Text fontSize="sm" mb={1}>
                Social Media URL
              </Text>
              <Box gap={4} display="flex">
                <Input placeholder="Enter a social media URL" />
                <Button bgColor="primary" color="white">
                  Analyze
                </Button>
              </Box>
            </Box>
          </Card>
        </Box>
        <Box w={{ base: "100%", sm: "100%", lg: "40%" }}>
          <Fade in={false}>Helo</Fade>
        </Box>
      </Flex>
      <Flex mt={6} flexGrow={1}>
        <Card minH={400} width="100%">
          {data.length === 0 ? (
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              h="100%"
            >
              <EmptyData title="No Data" subtitle="Enter a post to analyze" />
            </Box>
          ) : (
            <Text>Chart goes here</Text>
          )}
        </Card>
      </Flex>
    </Box>
  );
};

export default AnalysisView;
