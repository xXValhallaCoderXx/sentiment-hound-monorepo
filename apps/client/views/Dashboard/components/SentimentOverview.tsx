import { Box, Flex } from "@chakra-ui/react";

const SentimentOverview = () => {
  return (
    <Flex gap={4} sx={{ p: 4 }} flexDirection={{ md: "row", sm: "column" }}>
      <Box bg="green" width={{ md: "33.3%" }}>
        adsa
      </Box>
      <Box bg="green" width={{ md: "33.3%" }}>
        adsa
      </Box>
      <Box bg="green" width={{ md: "33.3%" }}>
        adsa
      </Box>
    </Flex>
  );
};

export default SentimentOverview;
