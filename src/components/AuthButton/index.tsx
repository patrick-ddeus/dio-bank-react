import { Box, useStyleConfig } from "@chakra-ui/react";
import React, { MouseEventHandler } from "react";

interface AuthButtonProps {
  size: string;
  variant: string;
  onClick?: MouseEventHandler;
  children: React.ReactNode;
}

const AuthButton: React.FC<AuthButtonProps> = ({
  size,
  variant,
  children,
  onClick,
  ...rest
}) => {
  const ButtonStyles = useStyleConfig("AuthButton", { variant, size });

  return (
    <Box as="button" __css={ButtonStyles} onClick={onClick} {...rest}>
      {children}
    </Box>
  );
};

export default AuthButton;
