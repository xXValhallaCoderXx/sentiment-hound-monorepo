/* eslint-disable react/no-unescaped-entities */
import {
  Box,
  Button,
  Card,
  Flex,
  Heading,
  Input,
  Text,
} from "@chakra-ui/react";
import { CircleGradient } from "@client/shared/components/atoms";

const TryProductSection = () => {
  return (
    <Box display="flex" justifyContent="center">
      <Card maxWidth={"35%"} colorScheme="primary" mt={10} mb={10} p={6}>
        <Flex>
          <Box>
            <Heading>Interested to try out product?</Heading>
            <Text color="gray.500">
              Sentiment Hound is currently in closed beta. If you are interested
              in trying out our product, please fill out the form below and we
              will get back to you as soon as possible.
            </Text>
            <Flex gap={4} mt={4} mb={2}>
              <Input placeholder="Name" />
              <Button>Submit</Button>
            </Flex>
            <Text ml={2} color="gray.500" fontWeight={500}>
              Gooby eats your data, and we won't share it with anyone.
            </Text>
          </Box>
        </Flex>
      </Card>
    </Box>
  );
};

export default TryProductSection;
