import { Input } from "@chakra-ui/react";

interface InputIF {
  type: string;
  placeholder: string;
  size?: string;
  appearance?: string;
}

const InputField = ({
  type,
  placeholder,
  size,
  appearance = "outline",
  
}: InputIF) => {
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
    />
  );
};

export default InputField;
