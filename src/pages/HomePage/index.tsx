import React, { useContext, useEffect } from "react";
import { BellIcon } from "@chakra-ui/icons";
import { Flex, Text, Box, Grid, useDisclosure } from "@chakra-ui/react";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/Auth/AuthProvider";
import { headerFlexStyles, mainPageGrid } from "./styles";
import MenuSide from "./MenuSide";
import DrawerUser from "./Drawer";

const MainPage: React.FC = () => {
  const { isAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/");
    }
  }, []);

  return (
    <Box minHeight={"100vh"} bg={"#232323"}>
      <Flex {...headerFlexStyles}>
        <Text as="b" fontSize="lg">
          DioBank
        </Text>
        <Text fontWeight={500}>Dashboard</Text>
        <Flex>
          <BellIcon w={5} h={5} cursor="pointer" />
        </Flex>
      </Flex>
      <Grid {...mainPageGrid}>
        <MenuSide onOpen={onOpen} />
      </Grid>
      <DrawerUser isOpen={isOpen} onClose={onClose} />
    </Box>
  );
};

export default MainPage;
