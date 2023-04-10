import React from "react";
import { InputGroup, InputRightElement } from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import InputField from "../../../components/InputField";
import { ILogin } from "../../../api/AuthProtocols";

interface FormProps {
  form: ILogin;
  setForm: React.Dispatch<React.SetStateAction<ILogin>>;
}

const chakraStyles = {
  variant: "Flushed",
  w: "100%",
  h: "60px",
  p: "8px 10px",
  border: "1px",
  borderColor: "gray.200",
  borderRadius: "base",
  display: "block",
};


const Form: React.FC<FormProps> = ({ form, setForm }) => {
  const [view, setView] = React.useState<boolean>(false);

  const handleView = (): void => setView(!view);

  function handleForm(event: React.ChangeEvent<HTMLInputElement>): void {
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
          name="email"
          value={form.email}
          onChangeFunc={handleForm}
          {...chakraStyles}
        />
      </InputGroup>

      <InputGroup size="lg">
        <InputField
          type={view ? "text" : "password"}
          placeholder="password"
          value={form.password}
          name="password"
          onChangeFunc={handleForm}
          {...chakraStyles}
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
