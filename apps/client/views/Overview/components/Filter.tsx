import { Select, Box, Text } from "@chakra-ui/react";
import { MultiSelect } from "@client/shared/components/molecules/MultiSelect";

const FilterOverview = () => {
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
    </Box>
  );
};

export default FilterOverview;
