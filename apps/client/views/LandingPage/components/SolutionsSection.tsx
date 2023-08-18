import { Text, Box, Heading } from "@chakra-ui/react";

const SolutionsSection = () => {
  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        mt={8}
        sx={{ width: 800 }}
      >
        <Heading>Explore the Solutions</Heading>
        <Text mt={2} align="center">
          Make data-driven choices with confidence and stay ahead of the curve.
          Experience the power of our sentiment analysis product today and
          revolutionize your decision-making process.
        </Text>
      </Box>
    </Box>
  );
};

export default SolutionsSection;
