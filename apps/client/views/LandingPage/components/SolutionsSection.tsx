import { Text, Box, Heading, Flex } from "@chakra-ui/react";

const SolutionsSection = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      bgColor="gray"
      pb={8}
    >
      <Box
        // display="flex"
        // flexDirection="column"
        // alignItems="center"
        mt={8}
        sx={{ width: 800 }}
      >
        <Heading textAlign="center">Explore the Solutions</Heading>
        <Text mt={2} align="center">
          Make data-driven choices with confidence and stay ahead of the curve.
          Experience the power of our sentiment analysis product today and
          revolutionize your decision-making process.
        </Text>
        <Flex
          bgColor="red"
          gap={2}
          p={4}
          flexGrow={1}
          justifyContent="space-between"
          mt={5}
        >
          <Box flexBasis="50%">
            <Text>Powerful Suit Of Tools</Text>
            <Text>
              Cost-effective, reliable sentiment analysis. Unleash the potential
              of AI-driven data analysis and gain a deeper understanding of
              customers.
            </Text>
          </Box>
          <Box flexBasis="50%">sss</Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default SolutionsSection;
