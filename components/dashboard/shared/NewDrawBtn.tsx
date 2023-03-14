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
      bg={DEFAULT_STYLES.primaryHeaderColor}
      border='1px solid #2B2B2B'
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
