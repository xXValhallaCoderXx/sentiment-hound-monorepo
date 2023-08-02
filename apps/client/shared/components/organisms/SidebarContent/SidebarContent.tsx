import React from "react";
import {
  Box,
  CloseButton,
  Flex,
  useColorModeValue,
  Text,
  BoxProps,
} from "@chakra-ui/react";
import Image from "next/image";
import MainLogo from "@client/public/logos/main-logo.png";
import { IconType } from "react-icons";
import { FiHome, FiTrendingUp, FiCompass } from "react-icons/fi";
import { NavItem } from "@client/shared/components/molecules/NavItem";

interface LinkItemProps {
  name: string;
  icon: IconType;
  path: string;
}

interface SidebarProps extends BoxProps {
  onClose: () => void;
}

const LinkItems: Array<LinkItemProps> = [
  { name: "Dashboard", icon: FiHome, path: "/dashboard" },
  {
    name: "Analysis",
    icon: FiTrendingUp,
    path: "/dashboard/sentiment/analysis",
  },
  { name: "Overview", icon: FiCompass, path: "/dashboard/sentiment" },
];

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
  return (
    <Box
      transition="3s ease"
      bg={useColorModeValue("white", "gray.900")}
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "full", md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex h={20} alignItems="center" mx="4" justifyContent="space-between">
        <Image alt="logo" src={MainLogo} height={35} />
        <Text fontSize="xl">
          <span style={{ color: "red", fontWeight: 500 }}>Sentiment</span> Hound
        </Text>
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link) => (
        <NavItem {...link} key={link.name} icon={link.icon}>
          {link.name}
        </NavItem>
      ))}
    </Box>
  );
};

export default SidebarContent;
