import { Box, Text, Button } from "@chakra-ui/react";
import { FC } from "react";
interface IEmptyDataProps {
  title?: string;
  subtitle?: string;
  cta?: {
    label: string;
    onClick: () => void;
  };
}

const EmptyData: FC<IEmptyDataProps> = ({ title, subtitle, cta }) => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      flexDirection="column"
      alignItems="center"
    >
      {title && (
        <Text fontSize="3xl" color="black">
          {title}
        </Text>
      )}
      {subtitle && <Text>{subtitle}</Text>}
      {cta && (
        <Button sx={{ mt: 4 }} onClick={cta.onClick}>
          {cta.label}
        </Button>
      )}
    </Box>
  );
};

export default EmptyData;
