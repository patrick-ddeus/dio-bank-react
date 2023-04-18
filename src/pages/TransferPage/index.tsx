import {
  Box,
  Grid,
  GridItem,
  useDisclosure,
  Text,
  NumberInput,
  NumberInputField,
  Input,
  Button,
} from "@chakra-ui/react";
import React from "react";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import DrawerUser from "../../components/Drawer";
import { useLocation } from "react-router-dom";

const TransferPage: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [value, setValue] = React.useState<string>("0");
  const [hashAccount, setHashAccount] = React.useState<string>("");
  const parse = (val: string) => val.replace(/[^0-9.]/g, "");
  const location = useLocation();

  return (
    <Box minH={"100vh"} bg={"#232323"}>
      <Header title={"Transferências"} />
      <Grid templateColumns={"1fr 2fr 1fr"} minHeight={"calc(100vh - 80px)"}>
        <Sidebar
          onOpen={onOpen}
          username={location.state.fullname}
          balance={location.state.balance}
        />
        <GridItem>
          <Box border={"1px solid #333"} minH={"300px"} w={"100%"} p={"20px"} m={"20px"} borderRadius={"40px"}>
            <Text color={"white"} textAlign={"center"} fontSize={"2rem"}>
              Valor da Transferência
            </Text>
            <div
              style={{ display: "flex", alignItems: "center", color: "white" }}
            >
              <span>R$</span>
              <NumberInput
                onChange={(valueString) => setValue(parse(valueString))}
                value={value}
                border={"none 0 #232323"}
                max={location.state.balance}
              >
                <NumberInputField
                  fontSize={"60px"}
                  outline="1px solid #232323"
                  h={"70px"}
                  border={"none 0 #232323"}
                  outlineColor={"#232323"}
                  _focusVisible={{ boxShadow: "0 0 0 #232323" }}
                />
              </NumberInput>
            </div>
            <Input
              m={"30px 0"}
              bg={"white"}
              placeholder="Número da conta"
              color={"black"}
              h={"60px"}
              value={hashAccount}
              onChange={(event) => setHashAccount(event.target.value)}
            />
            <Button colorScheme={"green"}>Transferir</Button>
          </Box>
        </GridItem>
      </Grid>
      <DrawerUser isOpen={isOpen} onClose={onClose} />
    </Box>
  );
};

export default TransferPage;
