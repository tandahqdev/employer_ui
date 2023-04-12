import { ColumnFlex, Desc } from '@/components';
import { DEFAULT_STYLES } from '@/styles';
import { Button, Flex, Input, Text } from '@chakra-ui/react';
import { ExchangeCard } from '../../shared';

export const WithdrawFundActions = () => {
  return (
    <ColumnFlex gap='7'>
      <FormCard placeholder='250' label='Amount to Debit' currency='NGN' />
      <ExchangeCard
        title='Credit'
        desc=' #188,500.00'
        exChange='#1.00/$754.00'
        color='#ADA2A2'
      />

      <FormCard placeholder='e.g School Fees' label='Narration' />

      <Button mt='3'>Debit</Button>
    </ColumnFlex>
  );
};

interface FormProps {
  onChange?: (value: string) => void;
  currency?: string;
  placeholder?: string;
  label?: string;
}

const FormCard = ({ currency, label, onChange, placeholder }: FormProps) => {
  return (
    <ColumnFlex gap='1.5'>
      <Desc fontWeight={DEFAULT_STYLES.mediumbold}>{label}</Desc>

      <Flex
        layerStyle='flex'
        bg='rgba(228, 226, 226, 0.4)'
        color='#ADA2A2'
        w='full'
        pr='3'
        h='45px'
        borderRadius='5'
      >
        <Input
          border='none'
          _focus={{
            border: 'none',
            ring: '0px',
          }}
          bg='transparent'
          placeholder={placeholder}
          _placeholder={{
            color: '#ADA2A2',
            textStyle: 'placeholder',
          }}
          onChange={(e) => {
            onChange?.(e.target.value);
          }}
        />

        {currency && (
          <Text color='#ADA2A2' textStyle='bodyText'>
            {currency}
          </Text>
        )}
      </Flex>
    </ColumnFlex>
  );
};
