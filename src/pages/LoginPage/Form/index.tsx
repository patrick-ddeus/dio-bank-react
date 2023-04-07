import React, { ReactElement } from "react";
import { InputGroup, InputRightElement } from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import InputField from "../../../components/InputField";

const Form: React.FC = (): ReactElement => {
  const [view, setView] = React.useState<boolean>(false)
  const handleView = (): void => setView(!view);

  return (
    <>
      <InputGroup>
        <InputField type="text" placeholder="email" appearance="Flushed" />
      </InputGroup>

      <InputGroup size="lg">
        <InputField
          type={view ? "text" : "password"}
          placeholder="password"
          appearance="Flushed"
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
