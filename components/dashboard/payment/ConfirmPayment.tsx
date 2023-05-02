import { ColumnFlex, InputComp } from 'components';
import { usePaymentStore } from 'store';
import { DEFAULT_STYLES } from 'styles';
import { Text } from '@chakra-ui/react';
import { TandaHDivider } from '../shared';
import { PaymentFlexItem } from './PaymentFlexItem';
import { useColor } from './useColor';

export const ConfirmPayment = () => {
  const { repay, rate } = usePaymentStore();
  const sharedStyles = {
    px: '3',
    pb: '3',
  };

  const { color } = useColor();

  return (
    <ColumnFlex width='full' gap='3'>
      <Text textStyle='subtitle'>You are about to submit your draw</Text>

      <Text textStyle='subtitle' fontSize='0.75rem'>
        These are the terms of your new draw:
      </Text>

      <ColumnFlex
        w='full'
        bg={DEFAULT_STYLES.lightGrayBg}
        rounded='6px'
        gap='3px'
      >
        <PaymentFlexItem
          title='Term Cap'
          desc='3 months'
          pt='3'
          {...sharedStyles}
        />

        <PaymentFlexItem
          title='Rate'
          desc={<>({rate.toFixed(2)}%)</>}
          {...sharedStyles}
        />

        <PaymentFlexItem
          title='Available Credit'
          desc='$920,000.00'
          {...sharedStyles}
        />

        <TandaHDivider opacity={0.7} />

        <PaymentFlexItem
          title='Amount to pay back'
          desc={`$${repay.toFixed(2)}`}
          {...sharedStyles}
          pt='3'
        />

        <PaymentFlexItem
          title='Fee'
          desc={
            <>
              <span
                style={{
                  fontSize: '0.8rem',
                  fontWeight: 400,
                }}
              >
                ({rate.toFixed(2)}%)
              </span>{' '}
              ${repay.toFixed(2)}
            </>
          }
          {...sharedStyles}
        />

        <TandaHDivider opacity={0.7} />

        <PaymentFlexItem
          title='Total Payout'
          pt='3'
          px={sharedStyles.px}
          pb='4'
          desc={<span style={{ color }}>$920,000.00</span>}
        />
      </ColumnFlex>

      <Text textStyle='smallSubtitle'>
        Please, add a name to identity and submit your new draw.
      </Text>

      <InputComp
        label='Draw name'
        onChange={(e) => {
          console.log(e);
        }}
      />
    </ColumnFlex>
  );
};
