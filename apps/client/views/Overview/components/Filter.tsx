import { FC, useEffect, useState } from "react";
import { Select, Box, Text, Input } from "@chakra-ui/react";
import { RangeDatepicker } from "chakra-dayzed-datepicker";
import { MultiSelect } from "@client/shared/components/molecules/MultiSelect";

interface IFilterOverviewProps {
  onChange: any;
}

const FilterOverview: FC<IFilterOverviewProps> = ({ onChange }) => {
  const [selectedDates, setSelectedDates] = useState<Date[]>([
    new Date(),
    new Date(),
  ]);

  useEffect(() => {
    onChange({
      date: selectedDates,
    });
  }, [selectedDates]);

  return (
    <Box display="flex" gap={6}>
      <Box width="300px" display="flex" alignItems="flex-end" maxW="300px">
        <Input placeholder="Search content name..." />
      </Box>
      <Box maxW="200px" display="flex" alignItems="flex-end">
        <MultiSelect title="Platforms" options={["Youtube", "Twitter"]} />
      </Box>
      <Box maxW="200px" display="flex" alignItems="flex-end">
        <MultiSelect
          title="Sentiment"
          options={["Positive", "Negative", "Neutral"]}
          onChange={(e) => {
            console.log(e);
          }}
        />
      </Box>

      <Box>
        <RangeDatepicker
          selectedDates={selectedDates}
          onDateChange={setSelectedDates}
        />
      </Box>
    </Box>
  );
};

export default FilterOverview;
