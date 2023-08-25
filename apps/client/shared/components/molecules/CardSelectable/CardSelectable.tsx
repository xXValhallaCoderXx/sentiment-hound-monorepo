import { FC } from "react";
import { Box, Text } from "@chakra-ui/react";

interface ICardSelectableProps {
  title: string;
  index: number;
  description: string;
  isSelected: boolean;
  onSelect: () => void;
}

const SelectableCard: FC<ICardSelectableProps> = ({
  title,
  description,
  isSelected,
  onSelect,
  index,
}) => {
  return (
    <Box
      p={4}
      borderWidth={isSelected ? "2px" : "1px"}
      borderColor={isSelected ? "transparent" : "gray.300"}
      borderRadius="md"
      boxShadow={isSelected ? "none" : "md"}
      bg={isSelected ? "blue.200" : "white"}
      cursor="pointer"
      onClick={onSelect}
      _hover={{ borderColor: "gray.400" }}
      transition="border-color 0.2s, background-color 0.2s, box-shadow 0.2s"
    >
      <Text fontWeight="bold" mb={2}>
        {title}
      </Text>
      <Text>{description}</Text>
    </Box>
  );
};

export default SelectableCard;
