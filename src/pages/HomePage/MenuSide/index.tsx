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

interface MenuSideProps {
  onOpen: () => void;
}

const MenuSide: React.FC<MenuSideProps> = ({ onOpen }) => {
  return (
    <GridItem borderRight="1px solid #333" position={"relative"}>
      <List {...menuStyles}>
        <ListItem {...listItemStyles}>
          <Icon as={BiHomeAlt} fontSize={"25px"} w={12} />
          Dashboard
        </ListItem>
        <ListItem {...listItemStyles}>
          <Icon as={BiWallet} fontSize={"25px"} w={12} />
          Transactions
        </ListItem>
      </List>
      <Box position="absolute" left="10px" bottom="40px" w="90%">
        <Flex {...avatarStyles}>
          <Avatar src="https://bit.ly/broken-link" />
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
                Patrick
              </MenuButton>
              <MenuList>
                <MenuGroup title="profile">
                  <MenuItem onClick={onOpen}>Minha Conta</MenuItem>
                </MenuGroup>
              </MenuList>
            </Menu>
          </div>
        </Flex>
        <Button {...logoutButton} leftIcon={<BiLogOut />}>
          Deslogar
        </Button>
      </Box>
    </GridItem>
  );
};

export default MenuSide;
