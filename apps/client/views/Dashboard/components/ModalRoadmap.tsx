import { FC } from "react";
import {
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  Button,
} from "@chakra-ui/react";

interface IProps {
  isOpen: boolean;
  onClose: () => void;
}

const ModalRoadmap: FC<IProps> = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Modal Title</ModalHeader>
        <ModalCloseButton />
        <ModalBody>xxxx</ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Okay
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ModalRoadmap;
