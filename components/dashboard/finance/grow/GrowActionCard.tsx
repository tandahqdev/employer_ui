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
      width='334px'
      bgColor={DEFAULT_STYLES.white}
      border={DEFAULT_STYLES.border}
      borderRadius={DEFAULT_STYLES.borderRadius}
      minH='127px'
      maxH='127px'
      alignItems='flex-start'
      p='32px'
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
