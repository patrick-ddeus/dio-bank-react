import { Input } from "@chakra-ui/react";
import { ChangeEventHandler } from "react";

interface InputIF {
  type: string;
  placeholder: string;
  onChangeFunc?:ChangeEventHandler<HTMLInputElement>,
  value?:string,
  name?:string
}

const InputField: React.FC<InputIF> = ({
  type,
  placeholder,
  onChangeFunc,
  value,
  name,
  ...rest
}) => {
 
  return (
    <Input
      type={type}
      placeholder={placeholder}
      onChange={onChangeFunc}
      value={value}
      name={name}
      {...rest}
    />
  );
};

export default InputField;
