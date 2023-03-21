import { DEFAULT_STYLES } from '@/styles';
import { Text, TextProps } from '@chakra-ui/react';

export const Desc = ({ children, ...r }: TextProps) => {
  return (
    <Text
      color='rgba(99, 115, 129, 0.5)'
      fontSize='0.75rem'
      {...r}
      fontWeight={DEFAULT_STYLES.mediumbold}
    >
      {children}
    </Text>
  );
};
