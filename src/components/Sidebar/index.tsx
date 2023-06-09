import React from "react";
import {
  GridItem,
  List,
  ListItem,
  Icon,
  Box,
  Avatar,
  Button,
  Flex,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuGroup,
} from "@chakra-ui/react";
import { BiHomeAlt, BiWallet, BiLogOut } from "react-icons/bi";
import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  menuStyles,
  listItemStyles,
  avatarStyles,
  logoutButton,
} from "./styles";
import { AuthContext } from "../../contexts/Auth/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import { TransactionRequest } from "../../pages/HomePage";

interface MenuSideProps {
  onOpen: () => void;
  username: string;
  balance: number;
  setTransactions?: React.Dispatch<React.SetStateAction<TransactionRequest[]>>;
}

const Sidebar: React.FC<MenuSideProps> = ({
  onOpen,
  username,
  balance,
  setTransactions,
}) => {
  const { logoutContext } = React.useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <GridItem
      borderRight="1px solid #333"
      position={"relative"}
      minWidth={"280px"}
    >
      <List {...menuStyles}>
        <ListItem
          {...listItemStyles}
          onClick={() =>
            navigate("/home", {
              state: {
                fullname: username,
                accountNumber: location.state.accountNumber,
                balance,
              },
            })
          }
        >
          <Icon as={BiHomeAlt} fontSize={"25px"} w={12} />
          Painel de Controle
        </ListItem>
        <ListItem
          {...listItemStyles}
          onClick={() =>
            navigate("/home/transferences", {
              state: {
                fullname: username,
                accountNumber: location.state.accountNumber,
                balance,
              },
            })
          }
        >
          <Icon as={BiWallet} fontSize={"25px"} w={12} />
          Transferências
        </ListItem>
      </List>
      <Box position="absolute" left="10px" bottom="40px" w="90%">
        <Flex {...avatarStyles}>
          <Avatar src="https://cdn.discordapp.com/attachments/852899847446069248/1097738381993185300/WhatsApp_Image_2022-12-11_at_11.07.07.jpeg" />
          <div>
            <p style={{ color: "#858585", fontSize: "14px" }}>
              Bem vindo de volta!
            </p>
            <Menu>
              <MenuButton
                background={"transparent"}
                color="white"
                h={0}
                ml={"-15px"}
                as={Button}
                rightIcon={<ChevronDownIcon />}
              >
                {`${username.split(" ")[0]}  ${username.split(" ").slice(-1)}`}
              </MenuButton>
              <MenuList>
                <MenuGroup title="profile">
                  <MenuItem onClick={onOpen}>Minha Conta</MenuItem>
                </MenuGroup>
              </MenuList>
            </Menu>
          </div>
        </Flex>
        <Button
          {...logoutButton}
          leftIcon={<BiLogOut />}
          onClick={() => {
            if (setTransactions) {
              setTransactions([]);
            }
            logoutContext();
            navigate("/");
          }}
        >
          Deslogar
        </Button>
      </Box>
    </GridItem>
  );
};

export default Sidebar;
