import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Input,
  Button,
} from "@chakra-ui/react";

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const DrawerUser: React.FC<DrawerProps> = ({ isOpen, onClose }) => {
  return (
    <>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent background={"#232323"} color={"white"}>
          <DrawerCloseButton />
          <DrawerHeader>Change your name</DrawerHeader>

          <DrawerBody>
            <Input placeholder="Type here..." />
          </DrawerBody>

          <DrawerFooter>
            <Button
              variant="outline"
              mr={3}
              onClick={onClose}
              _hover={{ color: "black", background:"white"}}
            >
              Cancel
            </Button>
            <Button colorScheme="blue">Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default DrawerUser;
