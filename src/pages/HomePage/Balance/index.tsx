import React from "react";
import {
  Box,
  Flex,
  GridItem,
  Stat,
  StatLabel,
  StatNumber,
  Input,
  InputGroup,
  InputLeftElement,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import { IoCopyOutline } from "react-icons/io5";
import { buttonsStyles } from "./styles";
import { TransactionRequest } from "../index";
import DepositModal from "./DepositModal";
import axios from "axios";

interface BalanceProps {
  accountNumber: string;
  setTransactions: React.Dispatch<React.SetStateAction<TransactionRequest[]>>;
}

export enum ModalTypes {
  Deposit,
  Withdraw,
}

const Balance: React.FC<BalanceProps> = ({ accountNumber, setTransactions }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [balance, setBalance] = React.useState<number>(0);
  const [typeModal, setTypeModal] = React.useState<ModalTypes>(
    ModalTypes.Deposit
  );
  const userinfo = JSON.parse(localStorage.getItem("userInfo") || "");

  React.useEffect(() => {
    async function getBalance() {
      try {
        const response = await axios.get(
          "http://localhost:5000/accounts/balance",
          { headers: { Authorization: `Bearer ${userinfo.token}` } }
        );
        const { balance } = response.data;

        setBalance(balance);
      } catch (err: any) {
        console.error(err.response.data);
      }
    }
    getBalance();
  }, []);

  function handleDepositButton() {
    setTypeModal(ModalTypes.Deposit);
    onOpen();
  }

  function handleWithdrawButton() {
    setTypeModal(ModalTypes.Withdraw);
    onOpen();
  }

  return (
    <GridItem minWidth={"750px"}>
      <Box
        w={"75%"}
        h={"350px"}
        bg={"white"}
        m={"20px auto"}
        borderRadius={"50px"}
        minWidth={"475px"}
      >
        <Box p={"40px"} display={"flex"} gap={"60px"} w={"90%"} m={"0 auto"}>
          <Stat>
            <StatLabel mb={"10px"} fontWeight={"600"}>
              My Balance
            </StatLabel>
            <StatNumber mb={"5px"} fontSize={"4rem"}>
              {balance.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </StatNumber>
            <InputGroup>
              <InputLeftElement
                cursor="pointer"
                onClick={() => navigator.clipboard.writeText(accountNumber)}
                children={
                  <IoCopyOutline
                    style={{ color: "#5565FF", fontSize: "19px" }}
                  />
                }
              />
              <Input readOnly value={accountNumber} fontWeight={"500"} />
            </InputGroup>
          </Stat>
        </Box>
        <Flex
          w={"75%"}
          justify={"space-between"}
          alignItems={"center"}
          mx={"auto"}
        >
          <Button
            bg="#5565FF"
            _hover={{ background: "#5575FF" }}
            onClick={handleDepositButton}
            {...buttonsStyles}
          >
            Depositar
          </Button>
          <Button
            bg={"#232323"}
            _hover={{ background: "#333333" }}
            onClick={handleWithdrawButton}
            {...buttonsStyles}
          >
            Sacar
          </Button>
        </Flex>
      </Box>
      <DepositModal
        onClose={onClose}
        isOpen={isOpen}
        setCurrentBalance={setBalance}
        balance={balance}
        type={typeModal}
        setTransactions={setTransactions}
      />
    </GridItem>
  );
};

export default Balance;
