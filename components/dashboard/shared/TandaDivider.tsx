import { DEFAULT_STYLES } from '@/styles';
import { Box } from '@chakra-ui/react';

export const TandaDivider = () => {
  return (
    <Box
      w={DEFAULT_STYLES.fullWidth}
      border={`1px solid ${DEFAULT_STYLES.primaryColor}`}
      opacity={0.1}
    />
  );
};
