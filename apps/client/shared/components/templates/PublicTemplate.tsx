import React from "react";
import { Box, useColorModeValue } from "@chakra-ui/react";
import { NavigationBarPublic } from "../organisms/NavigationBarPublic";
const PublicTemplate = ({ children }: any) => {
  return (
    <Box minH="calc(100vh - 10px)" bg={useColorModeValue("red.100", "red.900")}>
      <NavigationBarPublic />
      {children}
    </Box>
  );
};

export default PublicTemplate;
