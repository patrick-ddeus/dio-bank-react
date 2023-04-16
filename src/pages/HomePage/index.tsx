import React, { useContext, useEffect } from "react";
import {
  Box,
  Grid,
  GridItem,
  useDisclosure,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  Flex,
} from "@chakra-ui/react";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/Auth/AuthProvider";
import { mainPageGrid } from "./styles";
import Sidebar from "./Sidebar";
import DrawerUser from "./Drawer";
import Header from "./Header";

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
      <Header />
      <Grid {...mainPageGrid}>
        <Sidebar onOpen={onOpen} username={location.state} />
        <GridItem>
          <Box
            w={"60%"}
            h={"300px"}
            bg={"white"}
            m={"50px auto"}
            borderRadius={"50px"}
          >
            <Box p={"40px"} display={"flex"} gap={"60px"} w={"90%"} m={"0 auto"}>
              <Stat>
                <StatLabel mb={"20px"} fontWeight={"600"}>My Balance</StatLabel>
                <StatNumber mb={"10px"} fontSize={"4rem"}>R$ 0,00</StatNumber>
                <StatHelpText>Feb 12 - Feb 28</StatHelpText>
              </Stat>
            </Box>
          </Box>
        </GridItem>
        <GridItem></GridItem>
      </Grid>
      <DrawerUser isOpen={isOpen} onClose={onClose} />
    </Box>
  );
};

export default MainPage;
