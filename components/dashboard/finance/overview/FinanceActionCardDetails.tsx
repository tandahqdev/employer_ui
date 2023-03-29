import { ColumnFlex, Desc } from '@/components/shared';
import { DEFAULT_STYLES } from '@/styles';
import { BackgroundProps, Box, Flex, Icon, Text } from '@chakra-ui/react';
import { RiErrorWarningLine } from 'react-icons/ri';
import { WiMoonAltWaxingCrescent6 } from 'react-icons/wi';

interface Props {
  title: string;
  subTitle: string;
  priceDesc?: string;
  bg?: BackgroundProps['bg'];
  percent?: string;
}

export const FinanceActionCardDetails = ({
  subTitle,
  title,
  bg,
  priceDesc,
  percent,
}: Props) => {
  return (
    <ColumnFlex width={{ base: '90%', lg: '85%' }} py='6' gap='4'>
      <Flex align='center' gap='3'>
        <Icon
          as={WiMoonAltWaxingCrescent6}
          fontSize='1.3rem'
          color={DEFAULT_STYLES.darkGray}
        />

        <Flex align='center' gap='1.5'>
          <Text
            fontSize='1rem'
            fontWeight={DEFAULT_STYLES.bold}
            color={DEFAULT_STYLES.primaryColor}
            opacity={0.4}
          >
            {title}
          </Text>
          <Icon as={RiErrorWarningLine} color='#A3A7B7' />
        </Flex>
      </Flex>

      <Flex align='center' gap='3' justify='space-between'>
        <Text textStyle='title' fontSize='0.8rem'>
          {subTitle}
        </Text>

        {priceDesc && <Desc>From {priceDesc}</Desc>}
      </Flex>

      {bg && (
        <Box w={DEFAULT_STYLES.fullWidth} h='13px' bg='#DDE0F1' rounded={39}>
          <Box
            w={`${percent ?? '0'}%`}
            transition={DEFAULT_STYLES.transition}
            h='full'
            bg={bg}
            rounded={39}
          />
        </Box>
      )}
    </ColumnFlex>
  );
};
