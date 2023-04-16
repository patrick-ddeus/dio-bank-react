import {
  Box,
  Flex,
  FormControl,
  FormErrorMessage,
  Slide,
  Button,
} from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import InputField from "../../components/InputField";
import React, { useContext, useState } from "react";
import Auth from "../../api/Auth";
import { ILogin } from "../../api/Protocols/AuthProtocols";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/Auth/AuthProvider";
import axios from "axios";

const inputStyles = {
  variant: "Outline",
  w: "100%",
  h: "60px",
  p: "8px 10px",
  mb: "10px",
  borderRadius: "base",
};

const authButtonStyles = {
  mt: "10px",
  w: "100%",
  colorScheme: "green",
};

const RegisterPage: React.FC = () => {
  const [form, setForm] = useState<ILogin>({
    email: "",
    password: "",
    fullname: "",
  });
  const navigate = useNavigate();
  const isError = !form.email || !form.password || !form.fullname;
  const { loginContext } = useContext(AuthContext);
  const [loading, setLoading] = useState<boolean>(false);

  function handleForm(event: React.ChangeEvent<HTMLInputElement>) {
    setForm({ ...form, [event.target.name]: event.target.value });

  }

  function handleSubmit() {
    if (isError) return;
    setLoading(true);
    axios
      .post("http://localhost:5000/users", form)
      .then((response) => {
        setLoading(false);
        loginContext(response.data.token)
        navigate("/welcome", { state: form.fullname });
        console.log(response);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  }

  return (
    <Box minH={"100vh"} bg={"#4F2958"}>
      <Slide direction="top" in={true}>
        <ArrowBackIcon
          w={8}
          h={8}
          color="white"
          margin={25}
          cursor="pointer"
          zIndex={2}
          position="relative"
          onClick={() => navigate("/")}
        />
        <Flex
          align={"center"}
          flexDir={"column"}
          maxW={"450px"}
          margin={"0 auto"}
        >
          <Box
            as="h1"
            fontWeight={"600"}
            color={"white"}
            fontSize={"2rem"}
            mt={"60px"}
            mb={"60px"}
          >
            Faça o cadastro
          </Box>
          <FormControl isInvalid={isError} isRequired>
            {!form.email && (
              <FormErrorMessage>Email é requerido!</FormErrorMessage>
            )}
            <InputField
              type="text"
              placeholder="email"
              name="email"
              value={form.email}
              onChangeFunc={handleForm}
              {...inputStyles}
            />
            {!form.password && (
              <FormErrorMessage>Senha é requerida!</FormErrorMessage>
            )}
            <InputField
              type="password"
              placeholder="password"
              name="password"
              value={form.password}
              onChangeFunc={handleForm}
              {...inputStyles}
            />
            {!form.fullname && (
              <FormErrorMessage>O nome é requerido!</FormErrorMessage>
            )}
            <InputField
              type="text"
              placeholder="fullname"
              name="fullname"
              value={form.fullname}
              onChangeFunc={handleForm}
              {...inputStyles}
            />
          </FormControl>
          <Button
            size="md"
            variant="solid"
            onClick={handleSubmit}
            isLoading={loading}
            {...authButtonStyles}
          >
            Registrar
          </Button>
        </Flex>
      </Slide>
    </Box>
  );
};

export default RegisterPage;
