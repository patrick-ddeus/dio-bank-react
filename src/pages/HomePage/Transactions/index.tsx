import React from "react";
import { Text, GridItem, List, ListItem } from "@chakra-ui/react";
import axios from "axios";
import { TbCurrencyDollarOff, TbCurrencyDollar } from "react-icons/tb";
import { TransactionRequest } from "../index";

interface TransactionsProps {
  transactions: TransactionRequest[];
  setTransactions: React.Dispatch<React.SetStateAction<TransactionRequest[]>>;
}

const Transactions: React.FC<TransactionsProps> = ({
  transactions,
  setTransactions,
}) => {
  const userinfo = JSON.parse(localStorage.getItem("userInfo") || "");

  React.useEffect(() => {
    async function fetchTransactions() {
      try {
        const response = await axios.get(
          "http://localhost:5000/accounts/transactions",
          { headers: { Authorization: `Bearer ${userinfo.token}` } }
        );

        setTransactions(response.data.transactions);
        console.log(response.data.transactions);
      } catch (error) {
        console.error(error);
      }
    }

    fetchTransactions();
  }, []);

  function formatAmount(amount: number) {
    return amount.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  }

  return (
    <GridItem borderLeft="1px solid #333" p={"20px"} minWidth={"320px"}>
      <List
        textAlign={"right"}
        borderRadius={"5px"}
        p={"10px"}
        maxH={"450px"}
        overflow={"auto"}
      >
        <Text
          fontSize={"0.875rem"}
          color={"white"}
          fontWeight={"600"}
          textAlign={"center"}
          m={"30px 0"}
        >
          Últimas Transações
        </Text>
        {transactions &&
          transactions.map((transaction) => (
            <ListItem
              key={transaction._id}
              h={"50px"}
              color={"white"}
              display={"flex"}
              justifyContent={"space-between"}
            >
              <p style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                {transaction.type === "deposit" ? (
                  <TbCurrencyDollar fontSize={"20px"} color={"#03AC00"} />
                ) : (
                  <TbCurrencyDollarOff fontSize={"20px"} color={"#C70000"} />
                )}
                {transaction.type === "deposit" ? "Depósito" : "Saque"}
              </p>
              <p style={{ display: "flex", alignItems: "center" }}>
                {`${transaction.type === "deposit" ? "+" : "-"} ${formatAmount(
                  transaction.amount
                )}`}
              </p>
            </ListItem>
          ))}
      </List>
    </GridItem>
  );
};

export default Transactions;
