import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  NumberInput,
  NumberInputField,
  Button,
} from "@chakra-ui/react";
import axios from "axios";
import { ModalTypes } from "../index";
import { TransactionRequest } from "../../index";

interface modalProps {
  isOpen: boolean;
  onClose: () => void;
  setCurrentBalance: React.Dispatch<React.SetStateAction<number>>;
  type: ModalTypes;
  balance: number;
  setTransactions: React.Dispatch<React.SetStateAction<TransactionRequest[]>>;
}

const DepositModal: React.FC<modalProps> = ({
  isOpen,
  onClose,
  setCurrentBalance,
  type,
  balance,
  setTransactions,
}) => {
  const [value, setValue] = React.useState<string>("0");
  const [loading, setLoading] = React.useState<boolean>(false);
  const parse = (val: string) => val.replace(/[^0-9.]/g, "");

  const userInfo = localStorage.getItem("userInfo") || "{}";
  const parsedUserInfo = JSON.parse(userInfo);

  async function handleDeposit() {
    const depositOrWithdraw =
      type === ModalTypes.Deposit ? "deposit" : "withdraw";

    setLoading(true);

    try {
      await axios.post(
        `https://fortcamp-api.onrender.com/accounts/${depositOrWithdraw}`,
        { balance: Number(value) },
        { headers: { Authorization: `Bearer ${parsedUserInfo.token}` } }
      );

      if (depositOrWithdraw === "deposit") {
        setCurrentBalance((previousState) => previousState + Number(value));
      } else {
        setCurrentBalance((previousState) => previousState - Number(value));
      }

      setTransactions((previousState) => [
        ...previousState,
        { type: depositOrWithdraw, amount: Number(value), date: new Date() },
      ]);

      onClose();
    } catch (err: any) {
      console.error(err.response.data);
    } finally {
      setLoading(false);
    }
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent bg={"#232323"} color="white">
        <ModalHeader>
          Valor para {type === ModalTypes.Deposit ? "depósito" : "saque"}:
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <span>R$</span>
            <NumberInput
              onChange={(valueString) => setValue(parse(valueString))}
              value={value}
              border={"none 0 #232323"}
              max={type === ModalTypes.Deposit ? 10000000 : balance}
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
        </ModalBody>

        <ModalFooter>
          <Button
            colorScheme={type === ModalTypes.Deposit ? "blue" : "red"}
            mr={3}
            w={"100%"}
            onClick={handleDeposit}
            isLoading={loading}
          >
            {type === ModalTypes.Deposit ? "Depositar" : "Sacar"}
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default DepositModal;
