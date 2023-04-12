import { ColumnFlex, Desc, IconBtn } from '@/components';
import { DEFAULT_STYLES } from '@/styles';
import { CloseIcon } from '@chakra-ui/icons';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  Flex,
  Text,
} from '@chakra-ui/react';
import { ReactNode } from 'react';
import { TandaHDivider } from '../../shared';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  data?: ReactNode;
  header?: string;
  label?: string;
}

export const CardModal = ({ isOpen, onClose, data, header, label }: Props) => {
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
        <ModalBody
          display='flex'
          flexDirection='column'
          gap='3'
          minH='240px'
          py='5'
          px='5'
        >
          <ColumnFlex gap='2.5'>
            <Flex w='full' layerStyle='flex' justify='space-between'>
              <Text
                textStyle='title'
                color={DEFAULT_STYLES.lightPurple}
                fontWeight={DEFAULT_STYLES.bold}
              >
                {header ?? 'Hello James'}
              </Text>

              <IconBtn
                bg='transparent'
                border={`1px solid ${DEFAULT_STYLES.darkColor}`}
                rounded='full'
                p='1'
                icon={<CloseIcon fontSize='0.6rem' />}
                onClick={onClose}
                aria-label='close'
              />
            </Flex>

            <TandaHDivider />

            <Desc>{label ?? 'Fìll in the transaction details.'}</Desc>
          </ColumnFlex>
          {data}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
