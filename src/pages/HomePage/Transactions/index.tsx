import React from "react";
import { Text, GridItem, List, ListItem } from "@chakra-ui/react";
import axios from "axios";
import { useLocation } from "react-router-dom";

interface TransactionRequest {
  type: string;
  amount: number;
  date: Date;
}

const Transactions: React.FC = () => {
  const [transactions, setTransactions] = React.useState<TransactionRequest[]>(
    []
  );
  const location = useLocation();

  React.useEffect(() => {
    async function fetchTransactions() {
      try {
        const response = await axios.get(
          "http://localhost:5000/accounts/transactions",
          { headers: { Authorization: `Bearer ${location.state.token}` } }
        );

        setTransactions(response.data.transactions);
        console.log(transactions);
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
          Last Transactions
        </Text>
        {transactions &&
          transactions.map((transaction) => (
            <ListItem h={"50px"} color={"white"} display={"flex"} justifyContent={"space-between"}>
              <span>
                {transaction.type === "deposit" ? "Depósito" : "Saque"}
              </span>
              <span>
                {`${transaction.type === "deposit" ? "+" : "-"} ${formatAmount(
                  transaction.amount
                )}`}
              </span>
            </ListItem>
          ))}
      </List>
    </GridItem>
  );
};

export default Transactions;
