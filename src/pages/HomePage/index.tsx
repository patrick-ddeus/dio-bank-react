import React, { useContext, useEffect } from "react";
import { Box, Grid, GridItem, useDisclosure } from "@chakra-ui/react";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/Auth/AuthProvider";
import { mainPageGrid } from "./styles";
import Sidebar from "./Sidebar";
import DrawerUser from "./Drawer";
import Header from "./Header";
import Balance from "./Balance";

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
        <Sidebar onOpen={onOpen} username={location.state.fullname} />
        <Balance accountNumber={location.state.accountNumber} />
        <GridItem></GridItem>
      </Grid>
      <DrawerUser isOpen={isOpen} onClose={onClose} />
    </Box>
  );
};

export default MainPage;
