import { useSharedColor } from '@/customHooks';
import { getDay } from '@/utils';
import { Center, Flex, GridItem, Text } from '@chakra-ui/react';
import { BsFillCreditCardFill } from 'react-icons/bs';
import { WiMoonAltWaxingCrescent6 } from 'react-icons/wi';
import { TandaHDivider, TandaVDivider } from '../../shared';
import { FinanceCard } from '../shared/FinanceCard';

export const PaymentDetails = () => {
  const color = useSharedColor();

  return (
    <GridItem
      minH='176px'
      layerStyle='gridItem'
      colSpan={{ base: 1, md: 2 }}
      gap='7'
    >
      <Flex align='center' gap='10' direction={{ base: 'column', md: 'row' }}>
        <FinanceCard
          title='Next Payment'
          desc='$22,644,94'
          info='Due in 28 day(s)'
          icon={BsFillCreditCardFill}
          extra={
            <Text textStyle='title' fontSize='0.9rem' color={color}>
              {getDay(true)}
            </Text>
          }
        />

        <TandaVDivider display={{ base: 'none', md: 'block' }} />
        <TandaHDivider display={{ base: 'block', md: 'none' }} />

        <FinanceCard
          title='Outstanding'
          desc='$22,644,94'
          info='Due in 28 day(s)'
          icon={WiMoonAltWaxingCrescent6}
          extra={
            <Center
              border='10px solid #F0EAFD'
              w='72px'
              h='72px'
              borderRadius='full'
            >
              0%
            </Center>
          }
        />
      </Flex>
    </GridItem>
  );
};
