import { defineStyleConfig } from "@chakra-ui/react";

const AuthButton = defineStyleConfig({
  baseStyle: {
    fontWeight: "bold",
    borderRadius: "base",
    w: "100%",
    cursor: "pointer",
    _hover:{backgroundColor:"#2F855A", transition:"background .2s"}
  },
  sizes: {
    sm: {
      height: "20px",
      fontSize: "sm",
    },
    md: {
      height: "40px",
      fontSize: "md",
    },
  },

  variants: {
    outline: {
      border: "2px solid",
      borderColor: "#38A169",
      color: "white",
    },
    solid: {
      bg: "#38A169",
      color: "white",
    },
  },

  defaultProps: {
    size: "md",
    variant: "outline",
  },
});

export default AuthButton;
