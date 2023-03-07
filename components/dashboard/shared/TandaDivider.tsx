import { DEFAULT_STYLES } from '@/styles';
import { Box } from '@chakra-ui/react';

export const TandaHDivider = () => {
  return (
    <Box
      w={DEFAULT_STYLES.fullWidth}
      border={`1px solid ${DEFAULT_STYLES.primaryColor}`}
      opacity={0.1}
    />
  );
};

export const TandaVDivider = () => {
  return (
    <Box
      border={`1px solid ${DEFAULT_STYLES.primaryColor}`}
      opacity={0.1}
      height='100%'
    />
  );
};