import { ColumnFlex } from '@/components';
import { NewPageProps } from '@/models';
import { DEFAULT_STYLES } from '@/styles';
import { Flex, Icon, Text } from '@chakra-ui/react';
import { RiErrorWarningLine } from 'react-icons/ri';

export const OfferCard = ({ title, desc }: NewPageProps) => {
  return (
    <ColumnFlex gap='1'>
      <Flex
        align='center'
        color={DEFAULT_STYLES.primaryColor}
        opacity={0.4}
        gap='1'
      >
        <Text alignSelf='flex-start'>{title}</Text>

        <Icon as={RiErrorWarningLine} />
      </Flex>

      <Text
        textStyle='title'
        color={DEFAULT_STYLES.primaryHeaderColor}
        fontSize='0.9rem'
      >
        {desc}
      </Text>
    </ColumnFlex>
  );
};
