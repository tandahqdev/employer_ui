import { ColumnFlex, InputComp } from '@/components';
import { useModalContext } from '@/context';
import { useDrawStore } from '@/store';
import { DEFAULT_STYLES } from '@/styles';
import { Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { TandaHDivider } from '../shared';
import { DrawFlexItem } from './DrawFlexItem';

export const ConfirmDrawCard = () => {
  const { repay, rate } = useDrawStore();
  const { updateBtn, btn } = useModalContext();
  const [isTest] = useState(false);
  const sharedStyles = {
    px: '3',
    pb: '3',
  };

  useEffect(() => {
    if (isTest) {
      updateBtn({
        ...btn,
        isDisabled: false,
      });
    } else {
      updateBtn({
        ...btn,
        isDisabled: true,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isTest]);

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
        <DrawFlexItem
          title='Term Cap'
          desc='3 months'
          pt='3'
          {...sharedStyles}
        />
        <DrawFlexItem
          title='Rate'
          desc={<>({rate.toFixed(2)}%)</>}
          {...sharedStyles}
        />
        <DrawFlexItem
          title='Available Credit'
          desc='$920,000.00'
          {...sharedStyles}
        />
        <TandaHDivider />

        <DrawFlexItem
          title='Amount to pay back'
          desc={`$${repay.toFixed(2)}`}
          {...sharedStyles}
          pt='3'
        />
        <DrawFlexItem
          title='Fee'
          desc={
            <>
              <span
                style={{
                  fontSize: '0.87rem',
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

        <TandaHDivider />

        <DrawFlexItem
          title='Total Payout'
          pt='3'
          px={sharedStyles.px}
          pb='4'
          desc={
            <span style={{ color: DEFAULT_STYLES.lightPurple }}>
              $920,000.00
            </span>
          }
        />
      </ColumnFlex>

      <Text textStyle='subtitle' fontSize='0.75rem'>
        Please, add a name to identity and submit your new draw.
      </Text>

      <InputComp
        mainLabel='Draw name'
        options={{
          custom: (e) => {
            console.log(e);
          },
        }}
      />
    </ColumnFlex>
  );
};
