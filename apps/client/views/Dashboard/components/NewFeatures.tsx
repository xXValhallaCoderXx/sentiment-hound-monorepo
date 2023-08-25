import { Box, Text } from "@chakra-ui/react";

const NewFeatures = () => {
  return (
    <Box
      bgGradient="linear(to-tr, red.500, gray.500)"
      width="100%"
      height="100%"
      rounded="md"
      cursor={"pointer"}
      p={4}
    >
      <Text color="white" cursor="pointer" fontSize="xl" fontWeight={700}>
        {" "}
        New Upcoming Features
      </Text>
      <Text
        color="white"
        cursor="pointer"
        fontSize="sm"
        mt={1}
        fontWeight={400}
      >
        {" "}
        Check out whats coming soon
      </Text>
    </Box>
  );
};

export default NewFeatures;
