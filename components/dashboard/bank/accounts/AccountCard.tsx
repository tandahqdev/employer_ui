import { ColumnFlex, IconBtn } from 'components';
import { AccountModel } from 'models';
import { DEFAULT_STYLES } from 'styles';
import { CopyIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { Flex, Stack, Text } from '@chakra-ui/react';

export const AccountCard = ({ name, amount, accountNumber }: AccountModel) => {
  return (
    <Flex
      align='center'
      justify='space-between'
      border={DEFAULT_STYLES.border}
      borderRadius='10px'
      pl='3'
    >
      <Stack>
        <ColumnFlex opacity={0.75}>
          <Text
            textStyle='bolderBody'
            color={DEFAULT_STYLES.primaryHeaderColor}
          >
            {name}
          </Text>

          <Text textStyle='bolderBody' color={DEFAULT_STYLES.lightPurple}>
            {amount}
          </Text>
        </ColumnFlex>

        <ColumnFlex>
          <Text textStyle='bolderBody' color={DEFAULT_STYLES.lightPurple}>
            Account Number
          </Text>

          <Flex align='center' gap='1.5'>
            <Text textStyle='info' color={DEFAULT_STYLES.darkGray}>
              {accountNumber}
            </Text>

            <IconBtn
              aria-label='next'
              bg='transparent'
              icon={<CopyIcon fontSize='0.8rem' />}
            />
          </Flex>
        </ColumnFlex>
      </Stack>

      <IconBtn
        aria-label='next'
        bg='transparent'
        icon={<ChevronRightIcon fontSize='2.3rem' />}
      />
    </Flex>
  );
};
