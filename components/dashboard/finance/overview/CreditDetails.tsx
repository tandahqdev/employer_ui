import { DEFAULT_STYLES } from '@/styles';
import { ChevronRightIcon } from '@chakra-ui/icons';
import { Button, Flex, GridItem, Icon, Text } from '@chakra-ui/react';
import { RiErrorWarningLine } from 'react-icons/ri';

export const CreditDetails = () => {
  return (
    <GridItem minH='176px' layerStyle='gridItem' colSpan={2}>
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

        <Button
          variant='textBtn'
          rightIcon={<ChevronRightIcon fontSize='1.5rem' />}
        >
          View details
        </Button>
      </Flex>
    </GridItem>
  );
};
