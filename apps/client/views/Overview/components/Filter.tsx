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
        <MultiSelect
          title="Technologies"
          options={[
            "Chakra-UI",
            "React",
            "Vite",
            "TypeScript",
            "Next.js",
            "TailwindCSS",
            "React Query",
            "React Hook Form",
            "React Router",
          ]}
        />
      </Box>
      <Box maxW="200px">
        <Text fontSize="sm" mb={1}>
          Aspects
        </Text>
        <MultiSelect
          title="Technologies"
          options={[
            "Chakra-UI",
            "React",
            "Vite",
            "TypeScript",
            "Next.js",
            "TailwindCSS",
            "React Query",
            "React Hook Form",
            "React Router",
          ]}
        />
      </Box>
      <Box maxW="200px">
        <Text fontSize="sm" mb={1}>
          Sentiment
        </Text>
        <MultiSelect
          title="Technologies"
          options={[
            "Chakra-UI",
            "React",
            "Vite",
            "TypeScript",
            "Next.js",
            "TailwindCSS",
            "React Query",
            "React Hook Form",
            "React Router",
          ]}
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
