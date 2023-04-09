import React from "react";
import { InputGroup, InputRightElement } from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import InputField from "../../../components/InputField";
import { ILogin } from "../../../api/AuthProtocols";

interface FormProps {
  form: ILogin;
  setForm: React.Dispatch<React.SetStateAction<ILogin>>;
}

const Form: React.FC<FormProps> = ({ form, setForm }) => {
  const [view, setView] = React.useState<boolean>(false);

  const handleView = (): void => setView(!view);

  function handleForm(event: React.ChangeEvent<HTMLInputElement>) {
    setForm((previousState) => {
      return {
        ...previousState,
        [event.target.name]: event.target.value,
      };
    });
  }

  return (
    <>
      <InputGroup>
        <InputField
          type="text"
          placeholder="email"
          appearance="Flushed"
          name="email"
          value={form.email}
          onChangeFunc={handleForm}
        />
      </InputGroup>

      <InputGroup size="lg">
        <InputField
          type={view ? "text" : "password"}
          placeholder="password"
          appearance="Flushed"
          value={form.password}
          name="password"
          onChangeFunc={handleForm}
        />
        <InputRightElement
          onClick={handleView}
          children={
            view ? (
              <ViewIcon cursor={"pointer"} marginTop={3} w={6} h={6} />
            ) : (
              <ViewOffIcon cursor={"pointer"} marginTop={3} w={6} h={6} />
            )
          }
        />
      </InputGroup>
    </>
  );
};

export default Form;
