import { Desc } from '@/components';
import { useModalContext } from '@/context';
import { DEFAULT_STYLES } from '@/styles';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  Text,
  Button,
} from '@chakra-ui/react';

export const DrawModal = () => {
  const { isOpen, onClose } = useModalContext();

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      isCentered
      motionPreset='slideInRight'
    >
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton
          border={DEFAULT_STYLES.border}
          rounded='full'
          fontSize='0.8rem'
          _hover={{
            bg: 'transparent',
          }}
        />
        <ModalBody
          display='flex'
          flexDirection='column'
          gap='3'
          minH='240px'
          justifyContent='center'
        >
          <Text textStyle='title'>Your Draw is all set!</Text>

          <Desc>
            You have successfully launched your Draw. It will remain on a
            pending state until we review it internally. This process usually
            takes a few minutes to a couple of hours. Once reviewed, the cash
            will be transferred to your account and you will be notified.
          </Desc>

          <Button
            w='full'
            bg={DEFAULT_STYLES.primaryHeaderColor}
            size='smPadding'
          >
            View all draws
          </Button>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
