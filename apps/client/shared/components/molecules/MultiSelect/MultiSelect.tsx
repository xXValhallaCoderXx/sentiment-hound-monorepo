import React, { useState } from "react";
import {
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuOptionGroup,
  MenuItemOption,
  Button,
  Flex,
  Divider,
  Badge,
  Icon,
  IconButton,
} from "@chakra-ui/react";
import { FaCaretDown, FaFilter, FaCandyCane } from "react-icons/fa";

interface IMultiSelectProps {
  title: string;
  options: any[];
  onChange?: (selected: any) => void;
}

const MultiSelect: React.FC<IMultiSelectProps> = ({
  title,
  options,
  onChange = () => {},
}) => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleOptionSelect = (selected: any) => {
    const list: any = Array.isArray(selected)
      ? selected
      : [...selectedOptions, selected];

    setSelectedOptions(list);
    onChange(list);
  };

  const handleClear = () => {
    setSelectedOptions([]);
    onChange([]);
  };

  return (
    <Flex direction={"column"}>
      <Flex gap="4" align={"center"}>
        <Menu closeOnSelect={false}>
          <MenuButton
            as={Button}
            colorScheme="blue"
            variant={"outline"}
            rightIcon={<Icon as={FaCaretDown} />}
            maxW={"2xs"}
          >
            <Flex align="center" gap="2">
              <Text noOfLines={1}>{title}</Text>

              <Badge bg="blue.600" color="white">
                {selectedOptions.length}
              </Badge>
            </Flex>
          </MenuButton>
          <MenuList minWidth="xs" maxW={"sm"}>
            <MenuOptionGroup
              value={selectedOptions}
              onChange={handleOptionSelect}
              type="checkbox"
            >
              <Flex direction={"column"} gap="2" px="4" py="2">
                <Flex justify={"space-between"} align="center">
                  <Flex gap="2" align={"center"}>
                    <Icon as={FaFilter} />
                    <Text size="md" noOfLines={1} fontWeight={"medium"}>
                      {title}
                    </Text>
                  </Flex>
                  <Flex flexShrink={0} gap="2">
                    <Button
                      size="xs"
                      variant="link"
                      colorScheme="blue"
                      onClick={() => handleOptionSelect(options)}
                    >
                      Select All
                    </Button>

                    <Button
                      size="xs"
                      variant="link"
                      colorScheme="blue"
                      onClick={handleClear}
                    >
                      Clear
                    </Button>
                  </Flex>
                </Flex>
              </Flex>

              <Divider />

              {options.map((option: any) => (
                <MenuItemOption
                  key={option}
                  value={option}
                  _focus={{ bg: "yellow.100" }}
                  _hover={{ bg: "yellow.100" }}
                  transition={"background 0.3s ease"}
                >
                  {option}
                </MenuItemOption>
              ))}
            </MenuOptionGroup>
          </MenuList>
        </Menu>

        {selectedOptions.length > 0 && (
          <IconButton
            aria-label="Clear"
            size="xs"
            colorScheme="blue"
            rounded={"full"}
            icon={<Icon as={FaCandyCane} />}
            ml="-8"
            mt="-8"
            onClick={handleClear}
          />
        )}
      </Flex>
    </Flex>
  );
};

export default MultiSelect;
