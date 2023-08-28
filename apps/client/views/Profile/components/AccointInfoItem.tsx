import { FC } from "react";
import Image from "next/image";
import { Flex, Box, Text, StyleProps } from "@chakra-ui/react";

interface IProps {
  icon: any;
  title: string;
  content: string;
  wrapperSx?: StyleProps;
}

const AccountInfoItem: FC<IProps> = ({ icon, title, content, wrapperSx }) => {
  return (
    <Flex sx={{ ...wrapperSx }} gap={4}>
      <Box sx={{ pt: 1 }}>{icon}</Box>
      <Box>
        <Text fontSize="sm" color="secondary.500">
          {title}
        </Text>
        <Text color="blackAlpha.700">{content}</Text>
      </Box>
    </Flex>
  );
};

export default AccountInfoItem;
