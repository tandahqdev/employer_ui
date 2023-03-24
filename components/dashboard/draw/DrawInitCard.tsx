import { ColumnFlex } from '@/components/shared';
import { PaymentTerms } from '@/models';
import { DrawChangeHandler } from '@/store';
import { DEFAULT_STYLES } from '@/styles';
import { Flex, Radio, Text } from '@chakra-ui/react';

export const DrawInitCard = ({ isChecked, month, id, price }: PaymentTerms) => {
  return (
    <Flex
      border={isChecked ? `2px solid ${DEFAULT_STYLES.lightPurple}` : 'none'}
      bg={isChecked ? DEFAULT_STYLES.lightPurpleBg : 'transparent'}
      transition='background 0.3s linear'
      minH='63px'
      rounded='6px'
      padding='12px 18px'
      align='center'
      gap='20px'
      cursor='pointer'
      onClick={() => {
        if (isChecked) {
          DrawChangeHandler.onSelectedTermChange({
            isChecked,
            month,
            id,
            price,
          });
          DrawChangeHandler.onTermCheckedChange(false, id);
        } else {
          DrawChangeHandler.onTermCheckedChange(true, id);
        }
      }}
    >
      <Radio isChecked={isChecked} />

      <ColumnFlex>
        <Text textStyle='bodyText' color={DEFAULT_STYLES.darkGray}>
          <span
            style={{
              color: DEFAULT_STYLES.lightPurple,
              fontWeight: DEFAULT_STYLES.semibold,
            }}
          >
            {month} month{month > 1 ? 's' : ''}
          </span>{' '}
          of 2.00%
        </Text>

        <Text
          textStyle='bodyText'
          color={DEFAULT_STYLES.darkGray}
          fontWeight={DEFAULT_STYLES.mediumbold}
        >
          ${price.toFixed(2)}/month
        </Text>
      </ColumnFlex>
    </Flex>
  );
};
