import { useState } from "react";
import { Text, Box, Heading, Flex } from "@chakra-ui/react";
import { AccordianCustom } from "@client/shared/components/molecules";

const SolutionsSection = () => {
  const [expanded, setExpanded] = useState<boolean | number>(0);
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      bgColor="gray"
      pb={8}
    >
      <Box mt={8} sx={{ width: 800 }}>
        <Heading textAlign="center">Explore the Solutions</Heading>
        <Text mt={2} align="center">
          Make data-driven choices with confidence and stay ahead of the curve.
          Experience the power of our sentiment analysis product today and
          revolutionize your decision-making process.
        </Text>
        <Flex gap={2} p={4} flexGrow={1} justifyContent="space-between" mt={5}>
          <Box flexBasis="50%">
            <Text>Powerful Suit Of Tools</Text>
            <Text>
              Cost-effective, reliable sentiment analysis. Unleash the potential
              of AI-driven data analysis and gain a deeper understanding of
              customers.
            </Text>
            <AccordianCustom
              index={1}
              expanded={expanded}
              setExpanded={setExpanded}
            >
              What is thiiissss
            </AccordianCustom>
          </Box>
          <Box flexBasis="50%">sss</Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default SolutionsSection;
