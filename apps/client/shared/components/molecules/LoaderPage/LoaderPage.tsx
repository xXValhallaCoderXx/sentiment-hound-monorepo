import React from "react";
import { Box, Spinner, Text, Flex } from "@chakra-ui/react";

interface PageLoadingProps {
  text?: string;
}

const PageLoading: React.FC<PageLoadingProps> = ({ text }) => {
  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      width="100%"
      height="100%"
      bgColor="rgba(0, 0, 0, 0.5)"
      display="flex"
      justifyContent="center"
      alignItems="center"
      zIndex={9999}
    >
      <Flex direction="column" alignItems="center">
        <Spinner size="xl" color="white" />
        {text && (
          <Text mt={4} color="white">
            {text}
          </Text>
        )}
      </Flex>
    </Box>
  );
};

export default PageLoading;
