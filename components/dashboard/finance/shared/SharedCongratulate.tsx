import Image from 'next/image';
import party from '@/assets/images/party.png';
import { DEFAULT_STYLES } from '@/styles';
import { Box, Flex, Grid, GridItem, HStack, Text } from '@chakra-ui/react';
import { HelpText, NewPageCard } from '../../shared';
import { GrowActionCard } from './GrowActionCard';
import { OfferCard } from './OfferCard';

export const SharedCongratulate = () => {
  return (
    <Grid gap='33px' templateColumns='repeat(4,1fr)'>
      <GridItem
        minH='212px'
        border={DEFAULT_STYLES.border}
        borderRadius={DEFAULT_STYLES.borderRadius}
        bg={DEFAULT_STYLES.white}
        display='flex'
        flexDirection='column'
        justifyContent='center'
        colSpan={3}
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
          <Text color={DEFAULT_STYLES.primaryColor} opacity={0.4}>
            Your Offer
          </Text>

          <HStack h='40px' gap='2'>
            <OfferCard title='Credit cap' desc='$920,000.00' />
            <Box
              border={`1px solid ${DEFAULT_STYLES.primaryColor}`}
              opacity={0.1}
              height='100%'
            />
            <OfferCard title='Max term' desc='12 months' />
            <Box
              border={`1px solid ${DEFAULT_STYLES.primaryColor}`}
              opacity={0.1}
              height='100%'
            />
            <OfferCard title='Rate' desc='8.00%' />
          </HStack>
        </Flex>
      </GridItem>

      <GrowActionCard header='Need some help?'>
        <HelpText />
      </GrowActionCard>

      <GridItem colSpan={3}>
        <NewPageCard
          title='Grow'
          desc='Access up to 60% of your predictable ARR on day one. Fuel your growth without taking on debt or diluting our equity.'
        />
      </GridItem>
    </Grid>
  );
};
