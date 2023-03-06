import { DEFAULT_STYLES } from '@/styles';
import { Button } from '@chakra-ui/react';

export const NewDrawBtn = () => {
  return (
    <Button
      width={DEFAULT_STYLES.fullWidth}
      bg={DEFAULT_STYLES.primaryHeaderColor}
      border='1px solid #2B2B2B'
      rounded={8}
      isDisabled
      size='smPadding'
    >
      New draw
    </Button>
  );
};
