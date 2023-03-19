import { DEFAULT_STYLES } from '@/styles';
import {
  Box,
  Center,
  Flex,
  GridItem,
  Icon,
  Radio,
  Text,
} from '@chakra-ui/react';
import { useState } from 'react';
import { RiErrorWarningLine } from 'react-icons/ri';

export const DrawCard = () => {
  const [selectedIndex, setSelectedIndex] = useState([0]);
  const progressTab = [0, 1].map((_, i, arr) => {
    const showRightBar = i === 0;
    const showLeftBar = i === arr.length - 1;
    const isActive = selectedIndex.includes(i);

    return (
      <Flex align='center' key={i}>
        {showLeftBar && (
          <Box
            w='19px'
            h='3px'
            transition='all 0.3s ease'
            bg={isActive ? DEFAULT_STYLES.lightPurple : '#DBD7F4'}
          />
        )}

        <Center
          borderRadius='full'
          w='24px'
          h='24px'
          border={`3px solid ${DEFAULT_STYLES.lightPurple}`}
          onClick={() => {
            setSelectedIndex((p) => [...p, i]);
          }}
        >
          <Center
            w='14px'
            h='14px'
            bg={DEFAULT_STYLES.lightPurple}
            borderRadius='full'
            transition='all 0.3s ease'
            transform={isActive ? 'scale(1)' : 'scale(0)'}
          />
        </Center>
        {showRightBar && (
          <Box w='39px' h='3px' bg={DEFAULT_STYLES.lightPurple} />
        )}
      </Flex>
    );
  });

  return (
    <GridItem
      colSpan={{ base: 1, md: 'auto', lg: 'auto' }}
      minH='598px'
      width={{ base: 'auto', md: '374px', lg: 'auto' }}
      layerStyle='gridItem'
      justifyContent='flex-start'
      gridRowStart={{ base: 1, lg: 'auto' }}
      gap='5'
    >
      <Flex align='center' w={DEFAULT_STYLES.fullWidth} justify='center'>
        {progressTab}
      </Flex>

      <Flex align='center' gap='1.5' w={DEFAULT_STYLES.fullWidth}>
        <Text
          textStyle='title'
          color={DEFAULT_STYLES.primaryHeaderColor}
          fontSize='1.12rem'
        >
          Choose your payment terms
        </Text>

        <Icon as={RiErrorWarningLine} color='#A3A7B7' />
      </Flex>

      <Radio size='lg' />
    </GridItem>
  );
};
