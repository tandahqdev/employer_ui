import { containerStyles, DEFAULT_STYLES } from '@/styles';
import {
  GridItem,
  Flex,
  Text,
  Icon,
  Button,
  Center,
  HStack,
} from '@chakra-ui/react';
import { useState } from 'react';
import { AiOutlineDownload } from 'react-icons/ai';
import { RiErrorWarningLine } from 'react-icons/ri';

export const Transaction = () => {
  const [isActive, setIsActive] = useState(0);

  const renderButtons = ['Payment Schedule', 'Past Transactions'].map(
    (text, i) => {
      const isSelected = isActive === i;

      return (
        <Button
          key={`${text}_${i}`}
          size='smPadding'
          onClick={() => {
            setIsActive(i);
          }}
          color={
            isSelected
              ? DEFAULT_STYLES.lightPurple
              : DEFAULT_STYLES.primaryHeaderColor
          }
          opacity={isSelected ? 1 : 0.5}
          bg={isSelected ? 'rgba(110, 49, 240, 0.2)' : 'transparent'}
        >
          {text}
        </Button>
      );
    }
  );

  return (
    <GridItem
      colSpan={2}
      display={{ base: 'none', lg: 'flex' }}
      minH='379px'
      alignItems='center'
      justifyContent='flex-start'
      flexDirection='column'
      {...containerStyles}
      p='20px 30px'
      gap='6'
    >
      <Flex align='center' gap='1.5' w={DEFAULT_STYLES.fullWidth}>
        <Text
          textStyle='title'
          color={DEFAULT_STYLES.primaryHeaderColor}
          fontSize='1.4rem'
        >
          Your Transactions
        </Text>

        <Icon as={RiErrorWarningLine} color='#A3A7B7' />
      </Flex>

      <Flex
        justify='space-between'
        align='center'
        w={DEFAULT_STYLES.fullWidth}
        mb='80px'
      >
        <HStack>{renderButtons}</HStack>

        <Center
          w='34px'
          h='31px'
          cursor='pointer'
          bg={DEFAULT_STYLES.lightGray}
          opacity={0.3}
          rounded='5px'
          _active={{
            transform: 'scale(0.97)',
          }}
        >
          <AiOutlineDownload size='1.4rem' />
        </Center>
      </Flex>
    </GridItem>
  );
};
