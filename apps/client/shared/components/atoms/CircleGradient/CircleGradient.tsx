import { FC } from "react";
import { Box } from "@chakra-ui/react";

interface ICircleGradientProps {
  size?: number;
}

const CircleGradient: FC<ICircleGradientProps> = ({ size = 100 }) => {
  return (
    <Box
      width={size}
      height={size}
      borderRadius="50%" // This makes the element round
      background="linear-gradient(135deg, #FF8A00 0%, #E52E71 100%)" // Replace with your gradient colors and direction
      boxShadow="0px 4px 10px rgba(0, 0, 0, 0.25)" // Optional: Add a shadow for depth
    />
  );
};

export default CircleGradient;
