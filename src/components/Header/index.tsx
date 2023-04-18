import React from "react";
import { Flex, Text } from "@chakra-ui/react";
import { BellIcon } from "@chakra-ui/icons";
import { headerFlexStyles } from "./styles";

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <Flex {...headerFlexStyles}>
      <Text as="b" fontSize="lg">
        FortBank
      </Text>
      <Text fontWeight={500}>{title}</Text>
      <Flex>
        <BellIcon w={5} h={5} cursor="pointer" />
      </Flex>
    </Flex>
  );
};

export default Header;
