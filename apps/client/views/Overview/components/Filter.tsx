import { FC, useEffect, useState } from "react";
import { Select, Box, Text, Input } from "@chakra-ui/react";
import { RangeDatepicker } from "chakra-dayzed-datepicker";
import { MultiSelect } from "@client/shared/components/molecules/MultiSelect";
import { PLATFORM_OPTIONS, SENTIMENT_OPTIONS } from "@client/shared/constants";

interface IFilterOverviewProps {
  onChange: any;
}

const FilterOverview: FC<IFilterOverviewProps> = ({ onChange }) => {
  const [selectedDates, setSelectedDates] = useState<Date[]>([
    new Date(),
    new Date(),
  ]);
  const [sentiment, setSentiment] = useState([]);
  const [platform, setPlatform] = useState([]);

  useEffect(() => {
    onChange({
      date: selectedDates,
      ...(platform.length > 0 && { platform }),
      ...(sentiment.length > 0 && { sentiment }),
    });
  }, [selectedDates, platform, sentiment]);

  return (
    <Box display="flex" gap={6}>
      <Box width="300px" display="flex" alignItems="flex-end" maxW="300px">
        <Input placeholder="Search content name..." />
      </Box>
      <Box maxW="200px" display="flex" alignItems="flex-end">
        <MultiSelect
          title="Platforms"
          options={PLATFORM_OPTIONS}
          onChange={(e) => setPlatform(e)}
        />
      </Box>
      <Box maxW="200px" display="flex" alignItems="flex-end">
        <MultiSelect
          title="Sentiment"
          options={SENTIMENT_OPTIONS}
          onChange={(e) => setSentiment(e)}
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
