import { LayoutProps } from '@/models';
import { useDisclosure } from '@chakra-ui/react';
import { createContext, useContext } from 'react';

interface ModalContextModel {
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
}

const ModalContext = createContext<ModalContextModel>({
  isOpen: false,
  onClose: () => {},
  onOpen: () => {},
});

export const ModalContextProvider = ({ children }: LayoutProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <ModalContext.Provider value={{ isOpen, onClose, onOpen }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModalContext = () => {
  return useContext(ModalContext);
};
