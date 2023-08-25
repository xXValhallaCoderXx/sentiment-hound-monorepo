import React from "react";
import { Box, useColorModeValue } from "@chakra-ui/react";
import { NavigationBarPublic } from "../organisms/NavigationBarPublic";
const PublicTemplate = ({ children }: any) => {
  return (
    <Box height="100vh">
      <NavigationBarPublic />
      {children}
    </Box>
  );
};

export default PublicTemplate;
