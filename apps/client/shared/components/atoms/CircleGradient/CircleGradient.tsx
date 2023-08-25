import { FC } from "react";
import { Box, useToken } from "@chakra-ui/react";

interface ICircleGradientProps {
  size?: number;
}

const CircleGradient: FC<ICircleGradientProps> = ({ size = 100 }) => {
  const [primary, secondary] = useToken(
    // the key within the theme, in this case `theme.colors`
    "colors",
    // the subkey(s), resolving to `theme.colors.red.100`
    ["primary.500", "gray.500"]
    // a single fallback or fallback array matching the length of the previous arg
  );

  return (
    <Box
      width={size}
      height={size}
      borderRadius="50%" // This makes the element round
      background={`linear-gradient(135deg, ${primary} 0%, ${secondary} 100%)`} // Replace with your gradient colors and direction
      boxShadow="0px 4px 10px rgba(0, 0, 0, 0.25)" // Optional: Add a shadow for depth
    />
  );
};

export default CircleGradient;

