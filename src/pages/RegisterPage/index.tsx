import {
  Box,
  Flex,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  Slide,
} from "@chakra-ui/react";
import InputField from "../../components/InputField";
import React, { useState } from "react";
import AuthButton from "../../components/AuthButton";
import Auth from "../../api/Auth";
import { ILogin } from "../../api/AuthProtocols";
import { useNavigate } from "react-router-dom";

const inputStyles = {
  variant: "Flushed",
  w: "100%",
  h: "60px",
  p: "8px 10px",
  borderRadius: "base",
};

const RegisterPage: React.FC = () => {
  const [form, setForm] = useState<ILogin>({ email: "", password: "" });
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
          <FormControl
            display={"flex"}
            gap={"10px"}
            flexDir={"column"}
            isInvalid={isError}
          >
            {!form.email && (
              <FormErrorMessage>Preencha este campo!</FormErrorMessage>
            )}
            <InputField
              type="text"
              placeholder="email"
              name="email"
              value={form.email}
              onChangeFunc={handleForm}
              {...inputStyles}
            />
            {!form.email && (
              <FormErrorMessage>Preencha este campo!</FormErrorMessage>
            )}
            <InputField
              type="text"
              placeholder="password"
              name="password"
              value={form.password}
              onChangeFunc={handleForm}
              {...inputStyles}
            />
          </FormControl>
          <AuthButton
            size="md"
            variant="solid"
            onClick={handleSubmit}
          >
            Registrar
          </AuthButton>
        </Flex>
      </Slide>
    </Box>
  );
};

export default RegisterPage;
