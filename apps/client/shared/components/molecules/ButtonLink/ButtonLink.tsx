import { Button } from "@chakra-ui/react";
import Link from "next/link";
import { FC } from "react";

type IButtonSize = "sm" | "md" | "lg";
type IButtonColor = "primary" | "secondary" | "tertiary";

interface IButtonLinkProps {
  size: IButtonSize;
  href: string;
  color: IButtonColor;
  children: any;
}

interface IButtonColorParams {
  fontColor: string;
  bgColor: string;
  hover: string;
}

const fontSizeMapping: Record<IButtonSize, string> = {
  sm: "sm",
  md: "md",
  lg: "lg",
};

const buttonColorMapping: Record<IButtonColor, IButtonColorParams> = {
  primary: {
    fontColor: "white",
    bgColor: "primary",
    hover: "red.300",
  },
  secondary: {
    fontColor: "white",
    bgColor: "secondary",
    hover: "red.300",
  },
  tertiary: {
    fontColor: "white",
    bgColor: "tertiary",
    hover: "red.300",
  },
};

const ButtonLink: FC<IButtonLinkProps> = ({
  href,
  size = "sm",
  color,
  children,
}) => {
  const customSize = fontSizeMapping[size];
  const customColor = buttonColorMapping[color];
  return (
    <Link href={href} passHref>
      <Button
        // as={"a"}
        display={{ base: "none", md: "inline-flex" }}
        fontSize={customSize}
        fontWeight={600}
        color={customColor.fontColor}
        bg={customColor.bgColor}
        _hover={{
          bg: customColor.hover,
        }}
      >
        {children}
      </Button>
    </Link>
  );
};

export default ButtonLink;
