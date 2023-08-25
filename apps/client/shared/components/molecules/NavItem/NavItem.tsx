import React from "react";
import { useRouter } from "next/router";
import { Box, Flex, Icon, FlexProps } from "@chakra-ui/react";

import { IconType } from "react-icons";

interface NavItemProps extends FlexProps {
  icon: IconType;
  children: any;
  path: string;
}
const NavItem = ({ icon, children, ...rest }: NavItemProps) => {
  const router = useRouter();

  const isActive = router.pathname === rest.path;
  const onClickLink = () => router.push(rest.path);
  return (
    <Box
      onClick={onClickLink}
      style={{ textDecoration: "none" }}
      _focus={{ boxShadow: "none" }}
    >
      <Flex
        align="center"
        px="2"
        py="3"
        mx="4"
        my="2"
        borderRadius="lg"
        role="group"
        bg={isActive ? "red.500" : "transparent"}
        color={isActive ? "white" : "gray.700"}
        cursor="pointer"
        _hover={{
          bg: "red.300",
          color: "white",
        }}
        {...rest}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: "white",
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Box>
  );
};

export default NavItem;
