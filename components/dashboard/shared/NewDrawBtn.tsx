import { useModalContext } from '@/context';
import { DEFAULT_STYLES } from '@/styles';
import { Button } from '@chakra-ui/react';

interface Props {
  btnText: string;
  onClick?: () => void;
}

export const NewDrawBtn = ({ btnText, onClick }: Props) => {
  const { onOpen } = useModalContext();

  return (
    <Button
      width={DEFAULT_STYLES.fullWidth}
      variant='darkBtn'
      rounded={8}
      onClick={() => {
        onClick?.();
        onOpen();
      }}
      size='smPadding'
    >
      {btnText}
    </Button>
  );
};
