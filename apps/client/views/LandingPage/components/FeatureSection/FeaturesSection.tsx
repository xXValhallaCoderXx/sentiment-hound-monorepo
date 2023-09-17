import {
  Box,
  Container,
  Flex,
  Heading,
  Icon,
  Stack,
  Text,
} from "@chakra-ui/react";
import {
  FcAbout,
  FcAssistant,
  FcCollaboration,
  FcDonate,
  FcManager,
} from "react-icons/fc";

import FeatureCard from "./FeatureCard";
const FeatureSection = () => {
  return (
    <Box p={4} mt={{ base: 8, md: 4 }} mb={{ base: 8 }}>
      <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
        <Heading fontSize={{ base: "2xl", sm: "4xl" }} fontWeight={"bold"}>
          Explore features
        </Heading>
        <Text color={"gray.600"} fontSize={{ base: "sm", sm: "lg" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
          obcaecati ut cupiditate pariatur, dignissimos, placeat amet officiis.
        </Text>
      </Stack>

      <Container maxW={"5xl"} mt={12}>
        <Flex flexWrap="wrap" gridGap={6} justify="center">
          <FeatureCard
            heading={"Powerful Sentiment Analysis"}
            icon={<Icon as={FcAssistant} w={10} h={10} />}
            description={
              "Gain accurate insights across multiple platforms, into the emotions and attitudes expressed about your content and audience interactions."
            }
            href={"#"}
          />
          <FeatureCard
            heading={"Real-time Data Gathering"}
            icon={<Icon as={FcCollaboration} w={10} h={10} />}
            description={
              "Our app gathers data in real-time from major social media platforms, ensuring that you have access to fresh and relevant information at all times."
            }
            href={"#"}
          />
          <FeatureCard
            heading={"Aspect-based Analysis"}
            icon={<Icon as={FcDonate} w={10} h={10} />}
            description={
              "Our app goes beyond overall sentiment and delves into specific aspects, allowing users to identify precisely what people like and dislike."
            }
            href={"#"}
          />
          <FeatureCard
            heading={"Cross-platform Compatibility"}
            icon={<Icon as={FcManager} w={10} h={10} />}
            description={
              "Designed to work across multiple social media platforms, enabling you to gather data and analyze sentiments from various sources effortlessly."
            }
            href={"#"}
          />
          <FeatureCard
            heading={"Customizable Insights"}
            icon={<Icon as={FcAbout} w={10} h={10} />}
            description={
              "With our app, users can customize sentiment analysis parameters and filters, gaining insights that are relevant and personalized to their specific goals."
            }
            href={"#"}
          />
          <FeatureCard
            heading={"User-friendly Interface"}
            icon={<Icon as={FcAbout} w={10} h={10} />}
            description={
              "User-friendly interface that makes it easy for users to navigate and access powerful sentiment analysis tools without any hassle."
            }
            href={"#"}
          />
        </Flex>
      </Container>
    </Box>
  );
};

export default FeatureSection;
