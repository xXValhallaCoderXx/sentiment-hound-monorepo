import { FC } from "react";
import { Box, Flex, Text } from "@chakra-ui/react";

interface ISentimentOverviewProps {
  positive: number;
  negative: number;
  neutral: number;
}

const SentimentOverview: FC<ISentimentOverviewProps> = (data) => {
  return (
    <Box sx={{ p: 4 }}>
      <Box mb={2}>
        <Text fontSize="xl" fontWeight={600}>
          Sentiment Overview
        </Text>
      </Box>
      <Flex gap={4} flexDirection={{ md: "row", sm: "column" }}>
        <Box width={{ md: "33.3%" }}>
          <Text fontSize="xl" color="green" fontWeight={400}>
            Positive
          </Text>
          <Text fontWeight={700}>{data.positive}</Text>
        </Box>
        <Box width={{ md: "33.3%" }}>
          <Text fontSize="xl" color="red" fontWeight={400}>
            Negative
          </Text>
          <Text fontWeight={700}>{data.negative}</Text>
        </Box>
        <Box width={{ md: "33.3%" }}>
          <Text fontSize="xl" color="gray" fontWeight={400}>
            Neutral
          </Text>
          <Text fontWeight={700}>{data.neutral}</Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default SentimentOverview;
