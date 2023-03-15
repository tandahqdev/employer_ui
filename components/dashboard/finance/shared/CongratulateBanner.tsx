import Image from 'next/image';
import { Flex, GridItem, GridItemProps, HStack, Text } from '@chakra-ui/react';
import { DEFAULT_STYLES } from '@/styles';
import { TandaVDivider } from '../../shared';
import { OfferCard } from './OfferCard';
import { party } from '@/store';

interface Props {
  colSpan?: GridItemProps['colSpan'];
}

export const CongratulateBanner = ({ colSpan }: Props) => {
  return (
    <GridItem
      minH='212px'
      border={DEFAULT_STYLES.border}
      borderRadius={DEFAULT_STYLES.borderRadius}
      bg={DEFAULT_STYLES.white}
      display='flex'
      flexDirection='column'
      justifyContent='center'
      colSpan={colSpan}
      p='30px'
    >
      <Flex align='center' gap='1'>
        <Text
          textStyle='title'
          color={DEFAULT_STYLES.primaryHeaderColor}
          alignSelf='flex-start'
        >
          Congràtulations, you’re ready to start with tanda financing
        </Text>

        <Image src={party} alt='party' />
      </Flex>

      <Text color={DEFAULT_STYLES.primaryColor} pt='1' opacity={0.4}>
        The underwriting process was successful and your offer is ready
      </Text>

      <Flex
        w={DEFAULT_STYLES.fullWidth}
        align='center'
        justify='space-between'
        pt='10'
      >
        <Text
          color={DEFAULT_STYLES.primaryColor}
          opacity={0.4}
          display={{ base: 'none', md: 'inline' }}
        >
          Your Offer
        </Text>

        <HStack h='40px' gap='2'>
          <OfferCard title='Credit cap' desc='$920,000.00' />
          <TandaVDivider />
          <OfferCard title='Max term' desc='12 months' />
          <TandaVDivider />
          <OfferCard title='Rate' desc='8.00%' />
        </HStack>
      </Flex>
    </GridItem>
  );
};
