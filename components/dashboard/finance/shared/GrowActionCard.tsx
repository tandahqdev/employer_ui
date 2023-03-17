import { ColumnFlex } from '@/components';
import { DEFAULT_STYLES } from '@/styles';
import { Text } from '@chakra-ui/react';
import { LayoutProps } from '@/models';

interface Props extends LayoutProps {
  header: string;
}

export const GrowActionCard = ({ children, header }: Props) => {
  return (
    <ColumnFlex
      width={{ base: DEFAULT_STYLES.fullWidth, md: '334px' }}
      bgColor={DEFAULT_STYLES.white}
      border={DEFAULT_STYLES.border}
      borderRadius={DEFAULT_STYLES.borderRadius}
      alignItems='flex-start'
      p='30px'
      gap='4'
    >
      <Text
        textStyle='title'
        fontSize='1rem'
        color={DEFAULT_STYLES.primaryHeaderColor}
        alignSelf='flex-start'
      >
        {header}
      </Text>

      {children}
    </ColumnFlex>
  );
};
