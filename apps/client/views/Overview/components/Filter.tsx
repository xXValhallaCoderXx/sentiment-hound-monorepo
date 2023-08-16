import { useState } from "react";
import { Select, Box, Text } from "@chakra-ui/react";
import { RangeDatepicker } from "chakra-dayzed-datepicker";
import { MultiSelect } from "@client/shared/components/molecules/MultiSelect";

const FilterOverview = () => {
  const [selectedDates, setSelectedDates] = useState<Date[]>([
    new Date(),
    new Date(),
  ]);
  return (
    <Box display="flex" gap={6}>
      <Box maxW="200px">
        <Text fontSize="sm" mb={1}>
          Platform
        </Text>
        <MultiSelect title="Platforms" options={["Youtube", "Twitter"]} />
      </Box>
      <Box maxW="200px">
        <Text fontSize="sm" mb={1}>
          Sentiment
        </Text>
        <MultiSelect
          title="Sentiment"
          options={["Positive", "Negative", "Neutral"]}
          onChange={(e) => {
            console.log(e);
          }}
        />
      </Box>
      <Box maxW="200px">
        <Text fontSize="sm" mb={1}>
          Aspects
        </Text>
        <MultiSelect
          title="Aspects"
          options={["Gameplay", "Lag", "Weapon Handling"]}
        />
      </Box>

      <Box>
        <Text fontSize="sm" mb={1}>
          Date Range
        </Text>
        <RangeDatepicker
          selectedDates={selectedDates}
          onDateChange={setSelectedDates}
        />
      </Box>
    </Box>
  );
};

export default FilterOverview;
