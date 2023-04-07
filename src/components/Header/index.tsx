import { Box } from "@chakra-ui/react";
import React from "react";

const Header: React.FC = () => {
  return (
    <Box
      as={"header"}
      display={"flex"}
      justifyContent={"center"}
      position={"fixed"}
      width={"100%"}
    >
      <Box as={"h1"} color={"black"} fontSize={"3.5rem"} fontWeight={"700"}>
        Dio Bank
      </Box>
    </Box>
  );
};

export default Header;
