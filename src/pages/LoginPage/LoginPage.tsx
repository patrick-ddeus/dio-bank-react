import React from "react";
import Form from "./Form";
import { Box, Button, Center, Flex } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const LoginPage: React.FC = () => {
  const [loading, setLoading] = React.useState<boolean>(false);
  const navigate = useNavigate()
  
  function handleLoading(): void {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alert("Boas Vindas!")
      navigate("/")
    }, 1000);
  }

  return (
    <Box bg={"#902bf5"}>
      <Flex
        minH={"100vh"}
        width={"460px"}
        margin={"auto"}
        flexDir={"column"}
        gap="50px"
      >
        <Center>
          <Box
            as="h2"
            fontSize={"3rem"}
            color={"white"}
            marginTop={"150px"}
            fontWeight={"500"}
          >
            Faça o login
          </Box>
        </Center>
        <Box display={"flex"} flexDir={"column"} gap={"10px"}>
          <Form />
          <Button
            onClick={handleLoading}
            isLoading={loading}
            loadingText={"Submitting"}
            colorScheme="teal"
          >
            Submit
          </Button>
        </Box>
      </Flex>
    </Box>
  );
};

export default LoginPage;
