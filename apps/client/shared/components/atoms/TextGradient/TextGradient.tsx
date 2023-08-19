import { FC } from "react";
import { Box } from "@chakra-ui/react";

type ITextSize = "sm" | "md" | "lg" | "xl" | "2xl";
type ITextColor = "primary" | "secondary" | "tertiary";

interface IGradientTextProps {
  size: ITextSize;
  color: ITextColor;
  children: any;
}

const fontSizeMapping: Record<ITextSize, string> = {
  sm: "sm",
  md: "md",
  lg: "lg",
  xl: "xl",
  "2xl": "6xl",
};

const GradientText: FC<IGradientTextProps> = ({ children, size, color }) => {
  const fontSize = fontSizeMapping[size];
  return (
    <Box
      as="span"
      fontWeight="bold"
      fontSize={fontSize}
      backgroundClip="text"
      bgGradient="linear(to-l, #2D2D2D, #D13639)"
      color="transparent"
    >
      {children}
    </Box>
  );
};



export default GradientText;
