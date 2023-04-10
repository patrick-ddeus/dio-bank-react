import React from "react";
import Form from "./Form";
import Auth from "../../api/Auth";
import { Box, Button, Center, Flex, Slide } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { ILogin } from "../../api/AuthProtocols";

const LoginPage: React.FC = () => {
  const [loading, setLoading] = React.useState<boolean>(false);
  const [form, setForm] = React.useState<ILogin>({ email: "", password: "" });

  const navigate = useNavigate();

  function handleLoading(): void {
    setLoading(true);
    Auth.login(form)
      .then((response) => {
        alert(response);
        setLoading(false);
      })
      .catch((err) => {
        alert(err.message);
        setLoading(false);
      });
  }

  return (
    <Box minH={"100vh"} bg={"#902bf5"}>
      <Slide
        direction="top"
        in={true}
      >
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
            <Form form={form} setForm={setForm} />
            <Button
              onClick={() => handleLoading()}
              isLoading={loading}
              loadingText={"Submitting"}
              colorScheme="green"
            >
              Submit
            </Button>
            <Box
              as="button"
              bg={"transparent"}
              color={"white"}
              textDecor={"underline"}
              _hover={{ color: "black" }}
              transition={"color .2s ease"}
              onClick={() => navigate("/register")}
            >
              Não tem conta? se inscreva
            </Box>
          </Box>
        </Flex>
      </Slide>
    </Box>
  );
};

export default LoginPage;
