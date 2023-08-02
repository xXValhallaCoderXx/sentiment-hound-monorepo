import React from "react";
import { Box, useColorModeValue } from "@chakra-ui/react";

const PublicTemplate = ({ children }: any) => {
  return (
    <Box minH="100vh" bg={useColorModeValue("gray.100", "gray.900")}>
      {children}
    </Box>
  );
};

export default PublicTemplate;
