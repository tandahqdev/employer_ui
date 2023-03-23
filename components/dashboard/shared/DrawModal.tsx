import { useModalContext } from '@/context';
import { DEFAULT_STYLES } from '@/styles';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  Button,
} from '@chakra-ui/react';

export const DrawModal = () => {
  const { isOpen, onClose, btnText, onClick, onClickAction, data } =
    useModalContext();

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      isCentered
      motionPreset='slideInRight'
    >
      <ModalOverlay />
      <ModalContent position='relative'>
        <ModalCloseButton
          position='absolute'
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
          py='2.5'
          justifyContent='center'
        >
          {data}

          <Button
            w={DEFAULT_STYLES.fullWidth}
            variant='darkBtn'
            size='smPadding'
            onClick={() => {
              onClick(onClickAction);
            }}
          >
            {btnText}
          </Button>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
