import { Input } from "@chakra-ui/react";
import { ChangeEventHandler } from "react";

interface InputIF {
  type: string;
  placeholder: string;
  size?: string;
  appearance?: string;
  onChangeFunc?:ChangeEventHandler,
  value?:string,
  name?:string
}

const InputField: React.FC<InputIF> = ({
  type,
  placeholder,
  size,
  appearance = "outline",
  onChangeFunc,
  value,
  name
}) => {
 
  return (
    <Input
      type={type}
      placeholder={placeholder}
      size={size}
      variant={appearance}
      w={"100%"}
      h={"60px"}
      p={"8px 10px"}
      border="1px"
      borderColor="gray.200"
      borderRadius={"5px"}
      display={"block"}
      onChange={onChangeFunc}
      value={value}
      name={name}
    />
  );
};

export default InputField;
