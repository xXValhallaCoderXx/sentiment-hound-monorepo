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

const TryProductSection = () => {
  return (
    <Box display="flex" justifyContent="center">
      <Card maxWidth={"75%"} bgColor="red.500" mt={10} mb={10} p={6}>
        <Flex>
          <Box flexBasis="40%">
            <Heading>Interested to try out product?</Heading>

            <Text>
              Sentiment Hound is currently in closed beta. If you are interested
              in trying out our product, please fill out the form below and we
              will get back to you as soon as possible.
            </Text>
            <Flex gap={4} mt={4} mb={2}>
              <Input placeholder="Name" />
              <Button>Submit</Button>
            </Flex>
            <Text>
              Gooby eats your data, and we won't share it with anyone.
            </Text>
          </Box>
          <Box flexBasis="60%">
            <Heading>Interested to try out product?</Heading>
          </Box>
        </Flex>
      </Card>
    </Box>
  );
};

export default TryProductSection;
