import Image from 'next/image';
import { ColumnFlex } from '@/components/shared';
import { NewPageItemsModel } from '@/models';
import { DEFAULT_STYLES } from '@/styles';
import { Text } from '@chakra-ui/react';

export const NewPageCardItem = ({ title, desc, icon }: NewPageItemsModel) => {
  return (
    <ColumnFlex
      minH='225px'
      border={DEFAULT_STYLES.border}
      rounded='10px'
      justify='center'
      px='4'
      py='3'
      gap='3'
    >
      <Image src={icon} alt={title} />

      <Text
        textStyle='title'
        fontSize='1.1rem'
        color={DEFAULT_STYLES.lightPurple}
      >
        {title}
      </Text>

      <Text textStyle='desc' color={DEFAULT_STYLES.darkGray}>
        {desc}
      </Text>
    </ColumnFlex>
  );
};
