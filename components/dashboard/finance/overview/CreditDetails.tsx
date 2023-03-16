import { containerStyles, DEFAULT_STYLES } from '@/styles';
import { Center, Flex, GridItem, Icon, Text } from '@chakra-ui/react';
import { AiOutlineDownload } from 'react-icons/ai';
import { RiErrorWarningLine } from 'react-icons/ri';

export const CreditDetails = () => {
  return (
    <GridItem
      minH='176px'
      {...containerStyles}
      display='flex'
      flexDirection='column'
      justifyContent='center'
      p='30px'
      colSpan={2}
    >
      <Flex justify='space-between' align='center' w={DEFAULT_STYLES.fullWidth}>
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
