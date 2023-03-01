import { ColumnFlex } from '@/components/shared';
import { NewPageItemsModel } from '@/models';
import { DEFAULT_STYLES } from '@/styles';
import { Text } from '@chakra-ui/react';

export const NewPageCardItem = ({ title, desc }: NewPageItemsModel) => {
  return (
    <ColumnFlex
      w={{ base: DEFAULT_STYLES.fullWidth, xl: '196px' }}
      minH='225px'
      border={DEFAULT_STYLES.border}
      rounded='10px'
      justify='flex-end'
      px='4'
      pb='6'
      gap='1'
    >
      <Text
        textStyle='title'
        fontSize='1.1rem'
        color={DEFAULT_STYLES.lightPurple}
      >
        {title}
      </Text>

      <Text
        textStyle='desc'
        color={DEFAULT_STYLES.darkGray}
        flex='1'
        maxH='65px'
      >
        {desc}
      </Text>
    </ColumnFlex>
  );
};
