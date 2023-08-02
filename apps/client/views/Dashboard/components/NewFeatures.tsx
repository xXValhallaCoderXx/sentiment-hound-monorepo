import { Box, Text } from "@chakra-ui/react";

const NewFeatures = () => {
  return (
    <Box
      bgGradient="linear(to-tr, red.500, gray.500)"
      width="100%"
      height="70px"
      rounded="md"
      cursor={"pointer"}
      p={2}
    >
      <Text cursor="pointer" fontSize="lg" fontWeight={600}>
        {" "}
        New Upcoming Features
      </Text>
      <Text cursor="pointer" fontSize="sm" fontWeight={400}>
        {" "}
        Check out whats coming soon
      </Text>
    </Box>
  );
};

export default NewFeatures;
