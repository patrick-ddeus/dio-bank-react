import { Box, Flex } from "@chakra-ui/react";
import { TypeAnimation } from "react-type-animation";
import React from "react";
import { useLocation } from "react-router-dom";

const Index: React.FC = () => {
  const location = useLocation();
  return (
    <Box minH={"100vh"} bg={"#902bf5"}>
      <Flex minH={"100vh"} alignItems={"center"} justifyContent={"center"}>
        <TypeAnimation
          sequence={[
            `Olá, seja bem vindo ${location.state}!`,
            1000,
            "Estamos muito felizes por ter nos escolhido!",
            1000,
          ]}
          wrapper="span"
          cursor={true}
          repeat={0}
          style={{
            color: "white",
            fontWeight: "600",
            fontSize: "3rem",
          }}
        ></TypeAnimation>
      </Flex>
    </Box>
  );
};

export default Index;
