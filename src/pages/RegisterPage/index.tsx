import {
  Box,
  Flex,
  FormControl,
  FormErrorMessage,
  Slide,
} from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import InputField from "../../components/InputField";
import React, { useState } from "react";
import AuthButton from "../../components/AuthButton";
import Auth from "../../api/Auth";
import { ILogin } from "../../api/Protocols/AuthProtocols";
import { useNavigate } from "react-router-dom";

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
};

const RegisterPage: React.FC = () => {
  const [form, setForm] = useState<ILogin>({ email: "", password: "", fullName: "" });
  const navigate = useNavigate();
  const isError = !form.email || !form.password;

  function handleForm(event: React.ChangeEvent<HTMLInputElement>) {
    setForm({ ...form, [event.target.name]: event.target.value });
  }

  function handleSubmit() {
    if (isError) return;
    Auth.register(form).then(alert).catch(alert);
    navigate("/");
  }

  return (
    <Box minH={"100vh"} bg={"#902bf5"}>
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
              type="text"
              placeholder="password"
              name="password"
              value={form.password}
              onChangeFunc={handleForm}
              {...inputStyles}
            />
            {!form.fullName && (
              <FormErrorMessage>O nome é requerido!</FormErrorMessage>
            )}
            <InputField
              type="text"
              placeholder="fullname"
              name="fullName"
              value={form.fullName}
              onChangeFunc={handleForm}
              {...inputStyles}
            />
          </FormControl>
          <AuthButton
            size="md"
            variant="solid"
            onClick={handleSubmit}
            {...authButtonStyles}
          >
            Registrar
          </AuthButton>
        </Flex>
      </Slide>
    </Box>
  );
};

export default RegisterPage;
