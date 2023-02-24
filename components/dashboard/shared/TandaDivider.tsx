import { DEFAULT_STYLES } from '@/styles';
import { Box } from '@chakra-ui/react';

export const TandaDivider = () => {
  return (
    <Box
      w={DEFAULT_STYLES.fullWidth}
      border='1.5px solid #19224C'
      opacity={0.1}
    />
  );
};
