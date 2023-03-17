import Image from 'next/image';
import pending from '@/assets/images/pending.png';
import { ColumnFlex, TandaVDivider } from '@/components';
import { DEFAULT_STYLES } from '@/styles';
import { ChevronRightIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Flex,
  GridItem,
  HStack,
  Icon,
  Text,
} from '@chakra-ui/react';
import { RiErrorWarningLine } from 'react-icons/ri';
import { useEffect, useState } from 'react';
import { OfferCard } from '../shared/OfferCard';
import { getDay } from '@/utils';

export const CreditDetails = () => {
  const [test, setTest] = useState(0);
  const testArray = Array(3).fill('-');

  useEffect(() => {
    const timer = setInterval(() => {
      test < testArray.length - 1 ? setTest((prev) => prev + 1) : setTest(0);
    }, 3000);

    return () => {
      clearInterval(timer);
    };
  }, [test, testArray.length]);

  const renderTabs = testArray.map((e, i) => {
    const isActive = test === i;
    return (
      <Box
        w='40px'
        h='7px'
        key={`${e}_${i}`}
        transition='all 0.5s ease-in-out'
        bg={isActive ? DEFAULT_STYLES.lightPurple : '#D9D9D9'}
        borderRadius={5}
        onClick={() => {
          setTest(i);
        }}
      />
    );
  });

  return (
    <GridItem
      minH='176px'
      layerStyle='gridItem'
      colSpan={{ base: 1, md: 2 }}
      gap='7'
    >
      <Flex
        justify='space-between'
        gap={{ base: '1', md: 0 }}
        align={{ base: 'flex-start', md: 'center' }}
        flexDirection={{ base: 'column', md: 'row' }}
        w={DEFAULT_STYLES.fullWidth}
      >
        <Flex align='center' gap='1.5' w={DEFAULT_STYLES.fullWidth}>
          <Text
            textStyle='title'
            color={DEFAULT_STYLES.primaryHeaderColor}
            fontSize='1.4rem'
          >
            Your credit is on its way!
          </Text>

          <Icon as={RiErrorWarningLine} color='#A3A7B7' />
        </Flex>

        <Button
          variant='textBtn'
          rightIcon={<ChevronRightIcon fontSize='1.5rem' />}
        >
          View details
        </Button>
      </Flex>

      <Flex
        justify='space-between'
        gap={{ base: '4', md: 0 }}
        align={{ base: 'flex-start', md: 'center' }}
        flexDirection={{ base: 'column', md: 'row' }}
        w={DEFAULT_STYLES.fullWidth}
      >
        <ColumnFlex gap='6'>
          <Image src={pending} alt='Pending' />
          <Flex align='center' gap='2'>
            {renderTabs}
          </Flex>
        </ColumnFlex>

        <HStack h='40px' gap='2'>
          <OfferCard title='Amount' desc='$5,000,000.00' />
          <TandaVDivider />
          <OfferCard title='Date initiated' desc={getDay(true)} />
        </HStack>
      </Flex>
    </GridItem>
  );
};
