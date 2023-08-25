import React, { ReactNode } from "react";
import { Button, ButtonProps } from "@chakra-ui/react";
import { motion } from "framer-motion";

interface SquishyButtonProps extends ButtonProps {
  children: ReactNode;
}

const SquishyButton: React.FC<SquishyButtonProps> = ({
  children,
  size = "md",
  ...rest
}) => {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      style={{ display: "inline-block" }}
    >
      <Button
        size={size}
        boxShadow="md"
        borderRadius="full"
        padding="16px 24px"
        {...rest}
      >
        {children}
      </Button>
    </motion.div>
  );
};

export default SquishyButton;
