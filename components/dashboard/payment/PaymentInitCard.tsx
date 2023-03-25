import { ColumnFlex } from '@/components/shared';
import { PaymentTerms } from '@/models';
import { PaymentChangeHandler } from '@/store';
import { DEFAULT_STYLES } from '@/styles';
import { DashRoutes } from '@/utils';
import { Flex, Radio, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useColor } from './useColor';

export const PaymentInitCard = ({
  isChecked,
  month,
  id,
  price,
}: PaymentTerms) => {
  const router = useRouter();
  const isExpense = router.pathname === DashRoutes.expense;
  const { color, bg } = useColor(true);

  return (
    <Flex
      border={isChecked ? `2px solid ${color}` : 'none'}
      bg={isChecked ? bg : 'transparent'}
      transition='background 0.3s linear'
      minH='63px'
      rounded='6px'
      padding='12px 18px'
      align='center'
      gap='20px'
      cursor='pointer'
      onClick={() => {
        if (isChecked) {
          PaymentChangeHandler.onSelectedTermChange({
            isChecked,
            month,
            id,
            price,
          });
          PaymentChangeHandler.onTermCheckedChange(false, id);
        } else {
          PaymentChangeHandler.onTermCheckedChange(true, id);
        }
      }}
    >
      <Radio
        isChecked={isChecked}
        variant={isExpense ? 'pinkvariant' : undefined}
      />

      <ColumnFlex>
        <Text textStyle='bodyText' color={DEFAULT_STYLES.darkGray}>
          <span
            style={{
              color: color,
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
