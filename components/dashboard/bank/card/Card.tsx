import Image from 'next/image';
import cardscan from '@/assets/images/cardscan.png';
import { ColumnFlex } from '@/components';
import { CardType } from '@/models';
import { DEFAULT_STYLES } from '@/styles';
import { cardColorHandler, hidePin } from '@/utils';
import { Box, Circle, Flex, HStack, Spacer, Text } from '@chakra-ui/react';

export const Card = () => {
  return (
    <ColumnFlex
      minW='368px'
      minH='230px'
      p='10px 20px 25px 20px'
      borderRadius={DEFAULT_STYLES.borderRadius}
      bg={DEFAULT_STYLES.darkColor}
      boxShadow='0px 4px 4px rgba(0, 0, 0, 0.25)'
    >
      <Flex align='center' alignSelf='flex-end' gap='1.5'>
        <Circle bg={cardColorHandler(CardType.Physical)} p='1' />

        <Text
          textTransform='capitalize'
          color={DEFAULT_STYLES.white}
          bg='linear-gradient(90deg, #FFFFFF 4.57%, rgba(255, 255, 255, 0.56) 73.56%, rgba(246, 241, 241, 0.46) 98.96%)'
          bgClip='text'
          className='card-text'
          userSelect='none'
        >
          {CardType.Physical}
        </Text>
      </Flex>

      <Spacer />

      <Flex gap='6' align='center'>
        <Box
          w='50px'
          minH='37px'
          maxH='40px'
          borderRadius={8}
          bg='linear-gradient(164.43deg, #FFF27A 26.39%, #F4C33F 73.93%);'
          position='relative'
        >
          <Image src={cardscan} alt='cardscan' priority quality={100} />
        </Box>

        <ColumnFlex pt='2' w='max-content' gap='1'>
          <Text color='white' fontSize='1.4rem'>
            {hidePin('1234123456782145')}
          </Text>

          <Flex align='center' justify='space-between'>
            <HStack>
              <Text color='white' fontSize='0.9rem'>
                EXP{' '}
              </Text>
              <Text color='white' fontSize='0.9rem'>
                EXP{' '}
              </Text>
            </HStack>

            <HStack>
              <Text color='white' fontSize='0.9rem'>
                CVC{' '}
              </Text>

              <Text color='white' fontSize='0.9rem'>
                {hidePin('123', 0)}
              </Text>
            </HStack>
          </Flex>
        </ColumnFlex>
      </Flex>

      <Spacer />

      <Flex>
        <Box
          w='50px'
          minH='37px'
          borderRadius={8}
          bg='linear-gradient(164.43deg, #FFF27A 26.39%, #F4C33F 73.93%);'
          position='relative'
        >
          <Image src={cardscan} alt='cardscan' priority quality={100} fill />
        </Box>
      </Flex>
    </ColumnFlex>
  );
};
