import { Box, Flex, Fade } from "@chakra-ui/react";
import { TypeAnimation } from "react-type-animation";
import React, { useContext, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/Auth/AuthProvider";

const Index: React.FC = () => {
  const location = useLocation();
  const { isAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/");
    }
  }, []);

  return (
    <Box minH={"100vh"} bgGradient={"linear(to-b, #733381, #1A1A1A)"}>
      <Fade in={true}>
        <Flex minH={"100vh"} alignItems={"center"} justifyContent={"center"}>
          <TypeAnimation
            sequence={[
              `Olá, seja bem vindo ${location.state.fullName},`,
              800,
              "Estamos muito felizes por ter nos escolhido!",
              800,
              "Desejamos uma ótima experiência bancária!",
              500,
              () => {
                navigate("/home", { state: location.state.fullName });
              },
            ]}
            wrapper="span"
            cursor={true}
            repeat={Infinity}
            style={{
              color: "white",
              fontWeight: "600",
              fontSize: "3rem",
            }}
          ></TypeAnimation>
        </Flex>
      </Fade>
    </Box>
  );
};

export default Index;
