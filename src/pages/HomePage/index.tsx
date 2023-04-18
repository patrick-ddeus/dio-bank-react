import React, { useContext, useEffect } from "react";
import { Box, Grid, useDisclosure } from "@chakra-ui/react";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/Auth/AuthProvider";
import { mainPageGrid } from "./styles";
import Sidebar from "./Sidebar";
import DrawerUser from "./Drawer";
import Header from "./Header";
import Balance from "./Balance";
import Transactions from "./Transactions";

export interface TransactionRequest {
  _id?: number;
  type: string;
  amount: number;
  date: Date;
}

const MainPage: React.FC = () => {
  const { isAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [transactions, setTransactions] = React.useState<TransactionRequest[]>(
    []
  );
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/");
    }

    console.log(location.state);
  }, []);

  return (
    <Box minHeight={"100vh"} bg={"#232323"}>
      <Header />
      <Grid {...mainPageGrid}>
        <Sidebar onOpen={onOpen} username={location.state.fullname} />
        <Balance accountNumber={location.state.accountNumber} setTransactions={setTransactions}/>
        <Transactions transactions={transactions} setTransactions={setTransactions}/>
      </Grid>
      <DrawerUser isOpen={isOpen} onClose={onClose} />
    </Box>
  );
};

export default MainPage;
