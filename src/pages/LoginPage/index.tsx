import React, { useContext } from "react";
import Form from "./Form";
import {
  Alert,
  AlertIcon,
  Box,
  Button,
  Center,
  Flex,
  Slide,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { ILogin } from "../../api/Protocols/AuthProtocols";
import { AuthContext } from "../../contexts/Auth/AuthProvider";
import axios from "axios";

interface ErroInterface {
  status: boolean;
  message: string;
}

const LoginPage: React.FC = () => {
  const [loading, setLoading] = React.useState<boolean>(false);
  const [form, setForm] = React.useState<ILogin>({ email: "", password: "" });
  const errorRef = React.useRef<ErroInterface>({ status: false, message: "" });
  const navigate = useNavigate();
  const { loginContext } = useContext(AuthContext);

  function handleLoading(): void {
    setLoading(true);
    errorRef.current.status = false;

    axios
      .post("http://localhost:5000/auth", form)
      .then((response) => {
        setLoading(false);
        loginContext(response.data.token)
        navigate("/home", {state: response.data.user.fullname})
        console.log(response);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
        errorRef.current.status = true;
        errorRef.current.message = err.response.data.message;
      });
  }

  return (
    <Box minH={"100vh"} bg={"#4F2958"}>
      {errorRef.current.status && (
        <Alert status="error" justifyContent={"center"}>
          <AlertIcon />
          {errorRef.current.message}
        </Alert>
      )}
      <Slide direction="top" in={true}>
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
