import { LayoutProps } from '@/models';
import { useDisclosure } from '@chakra-ui/react';
import { createContext, ReactNode, useContext, useState } from 'react';
// * This is an interesting method that I am using
interface ModalContextModel {
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
  onClick: (e?: () => void) => void;
  onClickAction?: () => void;
  updateClickAction?: (e?: () => void) => void;
  data: ReactNode;
  updateData: (data: ReactNode) => void;
  btnText: string;
  updateBtn: (e: string) => void;
}

const ModalContext = createContext<ModalContextModel>({
  isOpen: false,
  onClose: () => {},
  onOpen: () => {},
  onClick: () => {},
  data: '',
  updateData: () => {},
  btnText: '',
  updateBtn: () => {},
  updateClickAction: () => {},
  onClickAction: () => {},
});

export const ModalContextProvider = ({ children }: LayoutProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [data, setData] = useState<ReactNode>('');
  const [btn, setBtn] = useState('');
  const [clickAction, setClickAction] = useState<VoidFunction | undefined>();

  const onClick = (e?: () => void) => {
    e?.();
  };

  const updateData = (e: ReactNode) => {
    setData(e);
  };

  const updateBtn = (e: string) => {
    setBtn(e);
  };

  const updateClickAction = (e?: () => void) => {
    setClickAction(e);
  };

  return (
    <ModalContext.Provider
      value={{
        isOpen,
        onClose,
        onOpen,
        onClick,
        data,
        updateData,
        btnText: btn,
        updateBtn,
        onClickAction: clickAction,
        updateClickAction,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export const useModalContext = () => useContext(ModalContext);
