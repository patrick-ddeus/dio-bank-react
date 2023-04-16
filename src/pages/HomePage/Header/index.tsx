import React from "react";
import { Flex, Text} from "@chakra-ui/react";
import { BellIcon } from "@chakra-ui/icons";
import { headerFlexStyles } from "./styles";

const Header: React.FC = () => {
  return (
    <Flex {...headerFlexStyles}>
      <Text as="b" fontSize="lg">
        DioBank
      </Text>
      <Text fontWeight={500}>Dashboard</Text>
      <Flex>
        <BellIcon w={5} h={5} cursor="pointer" />
      </Flex>
    </Flex>
  );
};

export default Header;
