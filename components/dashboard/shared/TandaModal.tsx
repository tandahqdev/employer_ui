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

export const TandaModal = () => {
  const { isOpen, onClose, btn, onClick, onClickAction, data } =
    useModalContext();

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      isCentered
      motionPreset='slideInBottom'
      size='sm'
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
          pt='10'
          pb='7'
          justifyContent='center'
        >
          {data}

          {btn.text && (
            <Button
              w={DEFAULT_STYLES.fullWidth}
              variant='darkBtn'
              size='smPadding'
              isDisabled={btn.isDisabled}
              onClick={() => {
                onClick(onClickAction);
              }}
            >
              {btn.text}
            </Button>
          )}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
