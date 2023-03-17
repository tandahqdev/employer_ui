import { ColumnFlex } from '@/components';
import { DEFAULT_STYLES } from '@/styles';
import { Text } from '@chakra-ui/react';

export const PageSecondaryTitle = () => {
  return (
    <ColumnFlex gap='0.5' px={DEFAULT_STYLES.mobilePx}>
      <Text textStyle='title'>Financing overview</Text>

      <Text
        textStyle='bodyText'
        color={DEFAULT_STYLES.primaryColor}
        opacity={0.4}
      >
        A quick glance at the aggregated status of your financing products with
        tanda
      </Text>
    </ColumnFlex>
  );
};
