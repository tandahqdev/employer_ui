import Image from 'next/image';
import { Flex, GridItem, GridItemProps, HStack, Text } from '@chakra-ui/react';
import { DEFAULT_STYLES } from '@/styles';
import { ActionTitle, TandaVDivider } from '../../shared';
import { OfferCard } from './OfferCard';
import { extendIcon, growIcon, party, plusIcon } from '@/store';

interface Props {
  colSpan?: GridItemProps['colSpan'];
  showBtns?: boolean;
}

export const CongratulateBanner = ({ colSpan, showBtns }: Props) => {
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
      gap='7'
    >
      {showBtns && (
        <Flex align='center' gap='4'>
          <ActionTitle
            header='Grow'
            icon={growIcon}
            headerColor={DEFAULT_STYLES.lightPurple}
          />

          <Image src={plusIcon} alt='plus' />

          <ActionTitle
            header='Extend'
            icon={extendIcon}
            headerColor={DEFAULT_STYLES.pink}
          />
        </Flex>
      )}

      <Flex direction='column'>
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
      </Flex>

      <Flex w={DEFAULT_STYLES.fullWidth} align='center' justify='space-between'>
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
