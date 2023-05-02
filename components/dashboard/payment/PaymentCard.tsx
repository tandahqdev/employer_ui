import { ColumnFlex, Desc, TandaHDivider, DrawModal } from 'components';
import { PaymentStatus } from 'models';
import { PaymentChangeHandler, paymentTab, usePaymentStore } from 'store';
import { DEFAULT_STYLES } from 'styles';
import { DashRoutes } from 'utils';
import { ChevronRightIcon } from '@chakra-ui/icons';
import {
  Button,
  Flex,
  Grid,
  GridItem,
  Icon,
  Input,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { RiErrorWarningLine } from 'react-icons/ri';
import { ConfirmPayment } from './ConfirmPayment';
import { InfoAlert } from './InfoAlert';
import { PaymentFlexItem } from './PaymentFlexItem';
import { PaymentInitCard } from './PaymentInitCard';
import { ProgressTab } from './ProgressTab';
import { useColor } from './useColor';

export const PaymentCard = () => {
  const { terms, selectedIndexs, repay, rate, total } = usePaymentStore();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const isInitTab = selectedIndexs.at(-1) === PaymentStatus.Initialisation;
  const isConclusionTab = selectedIndexs.at(-1) === PaymentStatus.Conclusion;
  const { color } = useColor();
  const router = useRouter();
  const isExpense = router.pathname === DashRoutes.expense;

  const progressTab = paymentTab.map((_, i, arr) => {
    const showRightBar = i === 0;
    const showLeftBar = i === arr.length - 1;
    const isActive = selectedIndexs.includes(i);

    return (
      <ProgressTab
        showLeftBar={showLeftBar}
        showRightBar={showRightBar}
        isActive={isActive}
        key={i}
      />
    );
  });

  const renderTabs = terms.map((term) => {
    return <PaymentInitCard {...term} key={term.id} />;
  });

  return (
    <>
      <GridItem
        colSpan={{ base: 1, md: 'auto', lg: 'auto' }}
        minH='473px'
        width={{ base: 'auto', md: '374px', lg: 'auto' }}
        layerStyle='gridItem'
        justifyContent='flex-start'
        gridRowStart={{ base: 1, lg: 'auto' }}
        gap='5'
      >
        <Flex align='center' w={DEFAULT_STYLES.fullWidth} justify='center'>
          {progressTab}
        </Flex>

        {isInitTab && (
          <>
            <Flex align='center' gap='1.5' w={DEFAULT_STYLES.fullWidth}>
              <Text
                textStyle='title'
                color={DEFAULT_STYLES.primaryHeaderColor}
                fontSize='1.12rem'
              >
                Choose your payment terms
              </Text>

              <Icon as={RiErrorWarningLine} color='#A3A7B7' />
            </Flex>

            <ColumnFlex gap='3.5' mt='1'>
              {renderTabs}
            </ColumnFlex>
          </>
        )}

        {isConclusionTab && (
          <>
            <PaymentFlexItem title='Term Cap' desc='3 months' />
            <PaymentFlexItem title='Rate' desc={<>({rate.toFixed(2)}%)</>} />
            <PaymentFlexItem
              title='Available Credit'
              desc={<span style={{ color }}>$920,000.00</span>}
            />

            <TandaHDivider />
          </>
        )}

        <PaymentFlexItem
          title='Amount to pay back'
          desc={`$${repay.toFixed(2)}`}
        />

        <PaymentFlexItem
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
        />

        <TandaHDivider />

        <PaymentFlexItem
          title='Total Payout'
          desc={
            isConclusionTab ? (
              <Input
                variant='tandaXs'
                value={total}
                textAlign='right'
                type='number'
                onChange={(e) => {
                  PaymentChangeHandler.onTotalChange(e.target.valueAsNumber);
                }}
              />
            ) : (
              `$${total.toFixed(2)}`
            )
          }
        />

        {isInitTab && (
          <Desc fontWeight={DEFAULT_STYLES.mediumbold} alignSelf='flex-end'>
            $670, 000,00 Credit remaining
          </Desc>
        )}

        {isConclusionTab && (
          <>
            <InfoAlert
              type='info'
              text={`Use the field above to enter the amount of funds you’d like to receive in your bank account`}
            />

            {!!total && (
              <Grid w='full' gridTemplateColumns='repeat(2,1fr)' gap='2'>
                <Button
                  bg={DEFAULT_STYLES.lightGrayBg}
                  color={DEFAULT_STYLES.primaryHeaderColor}
                  size='smPadding'
                  onClick={() => {
                    PaymentChangeHandler.onIndexChange(
                      PaymentStatus.Conclusion,
                      true
                    );
                    PaymentChangeHandler.onTotalChange(0);
                  }}
                >
                  Cancel
                </Button>

                <Button variant='dark' size='smPadding' isDisabled>
                  Confirm
                </Button>
              </Grid>
            )}
          </>
        )}

        <Button
          variant={isExpense ? 'pink' : 'dark'}
          size='smPadding'
          onClick={() => {
            if (isInitTab) {
              PaymentChangeHandler.onIndexChange(PaymentStatus.Conclusion);
            } else {
              onOpen();
            }
          }}
          rightIcon={total ? undefined : <ChevronRightIcon fontSize='1.5rem' />}
        >
          {total ? 'Review your credit' : 'Continue'}
        </Button>
      </GridItem>

      <DrawModal
        isOpen={isOpen}
        onClose={onClose}
        data={<ConfirmPayment />}
        btnText='Confirm submission'
      />
    </>
  );
};
