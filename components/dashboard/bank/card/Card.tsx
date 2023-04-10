import Image from 'next/image';
import cardscan from '@/assets/images/cardscan.png';
import cardlogo from '@/assets/images/cardlogo.png';
import { ColumnFlex } from '@/components';
import { CardData } from '@/models';
import { DEFAULT_STYLES } from '@/styles';
import { hidePin } from '@/utils';
import { Box, Circle, Flex, HStack, Spacer, Text } from '@chakra-ui/react';
import { cardImages } from '@/store';

interface Props {
  data: CardData;
}

export const Card = ({
  data: { getCardColor, type, getPin, brand, cvc },
}: Props) => {
  return (
    <ColumnFlex
      minH='230px'
      p='10px 20px 25px 20px'
      borderRadius={DEFAULT_STYLES.borderRadius}
      bg={DEFAULT_STYLES.darkColor}
      boxShadow='0px 4px 4px rgba(0, 0, 0, 0.25)'
    >
      <Flex layerStyle='flex' alignSelf='flex-end' gap='1.5'>
        <Circle bg={getCardColor} p='1' />

        <Text
          textTransform='capitalize'
          color={DEFAULT_STYLES.white}
          bg='linear-gradient(90deg, #FFFFFF 4.57%, rgba(255, 255, 255, 0.56) 73.56%, rgba(246, 241, 241, 0.46) 98.96%)'
          bgClip='text'
          className='card-text'
          userSelect='none'
        >
          {type}
        </Text>
      </Flex>

      <Spacer />

      <Flex gap='6' layerStyle='flex'>
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
            {getPin}
          </Text>

          <Flex layerStyle='flex' justify='space-between'>
            <HStack>
              <Text textStyle='card'>EXP </Text>
              <Text textStyle='card'>**/**</Text>
            </HStack>

            <HStack>
              <Text textStyle='card'>CVC </Text>

              <Text textStyle='card'>{hidePin(cvc, 0)}</Text>
            </HStack>
          </Flex>
        </ColumnFlex>
      </Flex>

      <Spacer />

      <Flex layerStyle='flex' justify='space-between'>
        <Image src={cardlogo} alt='cardLogo' quality={100} />
        <Image src={cardImages[brand]} alt='cardVerve' quality={100} />
      </Flex>
    </ColumnFlex>
  );
};
