import { ColumnFlex } from '@/components';
import { DEFAULT_STYLES } from '@/styles';
import { Button, GridItem, Text } from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';

export const NewBanner = () => {
  return (
    <GridItem colSpan={2} display='flex' minH='269px'>
      <ColumnFlex
        bg={DEFAULT_STYLES.white}
        border={DEFAULT_STYLES.border}
        rounded={16}
        flex='1'
        align='center'
        pt='38px'
        pb='40px'
      >
        <Text textStyle='header' fontSize='1.3rem' mb='1'>
          Supercharge your growth
        </Text>

        <Text
          maxW='450px'
          textAlign='center'
          color={DEFAULT_STYLES.primaryColor}
          opacity={0.4}
        >
          In order to complete your account setup and receive your funding
          offer, please connect your bank account, accounting platform, and
          payment platform.
        </Text>

        <Button mt='10' mb='3'>
          Connect your data
        </Button>

        <Button
          variant='textBtn'
          rightIcon={<ChevronRightIcon fontSize='1.6rem' mt='1' />}
        >
          Talk to our team
        </Button>
      </ColumnFlex>
    </GridItem>
  );
};
