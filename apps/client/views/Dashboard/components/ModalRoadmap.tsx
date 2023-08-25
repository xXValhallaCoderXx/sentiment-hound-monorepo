import { FC } from "react";
import {
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  ModalContent,
  Button,
  Text,
  Box,
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
        <ModalHeader>Sentiment Hound - Roadmap</ModalHeader>
        <ModalBody>
          <Text>
            We are building a bunch of new features, to keep you updated with
            what is being worked on next, check out the list below
          </Text>
          <Box p={4}>
            <ul>
              <li style={{ marginBottom: 2 }}>
                🐶 Aspect based sentiment analysis
              </li>
              <li style={{ marginBottom: 2 }}>
                🐶 Better filtering on sentiment analysis
              </li>
              <li>🐶 Twitter post analysis</li>
            </ul>
          </Box>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="primary" mr={3} onClick={onClose}>
            Woof!
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ModalRoadmap;
