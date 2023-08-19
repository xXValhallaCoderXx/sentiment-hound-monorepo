import { Box, Flex, Card, Heading, Text } from "@chakra-ui/react";
import FeatureCard from "./FeatureCard";
const FeaturesSection = () => {
  return (
    <Box display="flex" alignItems="center" flexDirection="column">
      <Heading mt={8} mb={4}>
        Explore Features
      </Heading>
      <Text>
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat.
      </Text>
      <Flex
        gap={6}
        flexWrap="wrap"
        maxWidth={1200}
        minWidth={900}
        justifyContent="space-around"
      >
        <Box>
          <FeatureCard
            title="Powerful Sentiment Analysis"
            description="Gain accurate insights across multiple platforms, into the emotions and attitudes expressed about your content and audience interactions."
          />
        </Box>
        <Box>
          <FeatureCard
            title="Real-time Data Gathering
"
            description="Our app gathers data in real-time from major social media platforms, ensuring that you have access to fresh and relevant information at all times."
          />
        </Box>
        <Box>
          <FeatureCard
            title="Aspect-based Analysis
"
            description="Our app goes beyond overall sentiment and delves into specific aspects, allowing users to identify precisely what people like and dislike."
          />
        </Box>
        <Box>
          <FeatureCard
            title="Powerful Sentiment Analysis"
            description="Gain accurate insights across multiple platforms, into the emotions and attitudes expressed about your content and audience interactions."
          />
        </Box>
        <Box>
          <FeatureCard
            title="Real-time Data Gathering
"
            description="Our app gathers data in real-time from major social media platforms, ensuring that you have access to fresh and relevant information at all times."
          />
        </Box>
        <Box>
          <FeatureCard
            title="Aspect-based Analysis
"
            description="Our app goes beyond overall sentiment and delves into specific aspects, allowing users to identify precisely what people like and dislike."
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default FeaturesSection;
