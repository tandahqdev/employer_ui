import { ColumnFlex, Desc, TandaHDivider } from '@/components';
import { useModalContext } from '@/context';
import { DrawStatus } from '@/models';
import { DrawChangeHandler, drawTab, useDrawStore } from '@/store';
import { DEFAULT_STYLES } from '@/styles';
import { ChevronRightIcon } from '@chakra-ui/icons';
import {
  Button,
  Flex,
  Grid,
  GridItem,
  Icon,
  Input,
  Text,
} from '@chakra-ui/react';
import { RiErrorWarningLine } from 'react-icons/ri';
import { ConfirmDrawCard } from './ConfirmDrawCard';
import { DrawFlexItem } from './DrawFlexItem';
import { DrawInfo } from './DrawInfo';
import { DrawInitCard } from './DrawInitCard';
import { DrawTab } from './DrawTab';

export const DrawCard = () => {
  const { terms, selectedIndexs, repay, rate, total } = useDrawStore();
  const { updateData, onOpen, updateBtn } = useModalContext();
  const isInitTab = selectedIndexs.at(-1) === DrawStatus.Initialisation;
  const isConclusionTab = selectedIndexs.at(-1) === DrawStatus.Conclusion;

  

  const progressTab = drawTab.map((_, i, arr) => {
    const showRightBar = i === 0;
    const showLeftBar = i === arr.length - 1;
    const isActive = selectedIndexs.includes(i);

    return (
      <DrawTab
        showLeftBar={showLeftBar}
        showRightBar={showRightBar}
        isActive={isActive}
        key={i}
      />
    );
  });

  const renderTabs = terms.map((term) => {
    return <DrawInitCard {...term} key={term.id} />;
  });

  return (
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
          <DrawFlexItem title='Term Cap' desc='3 months' />
          <DrawFlexItem title='Rate' desc={<>({rate.toFixed(2)}%)</>} />
          <DrawFlexItem
            title='Available Credit'
            desc={
              <span style={{ color: DEFAULT_STYLES.lightPurple }}>
                $920,000.00
              </span>
            }
          />

          <TandaHDivider />
        </>
      )}

      <DrawFlexItem title='Amount to pay back' desc={`$${repay.toFixed(2)}`} />

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
      />

      <TandaHDivider />

      <DrawFlexItem
        title='Total Payout'
        desc={
          isConclusionTab ? (
            <Input
              variant='tandaXs'
              value={total}
              textAlign='right'
              type='number'
              onChange={(e) => {
                DrawChangeHandler.onTotalChange(e.target.valueAsNumber);
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
          <DrawInfo
            isInfo
            text={
              <Text textStyle='desc' color={DEFAULT_STYLES.darkGray}>
                Use the field above to enter the amount of funds you’d like to
                receive in your bank account.
              </Text>
            }
          />

          {!!total && (
            <Grid w='full' gridTemplateColumns='repeat(2,1fr)' gap='2'>
              <Button
                bg={DEFAULT_STYLES.lightGrayBg}
                color={DEFAULT_STYLES.primaryHeaderColor}
                size='smPadding'
              >
                Cancel
              </Button>

              <Button variant='darkBtn' size='smPadding' isDisabled>
                Confirm
              </Button>
            </Grid>
          )}
        </>
      )}

      <Button
        variant='darkBtn'
        size='smPadding'
        onClick={() => {
          if (isInitTab) {
            DrawChangeHandler.onIndexChange(DrawStatus.Conclusion);
          } else {
            updateData(<ConfirmDrawCard />);
            onOpen();
            updateBtn({
              text: 'Confirm Submission',
              isDisabled: true,
            });
          }
        }}
        rightIcon={total ? undefined : <ChevronRightIcon fontSize='1.5rem' />}
      >
        {total ? 'Review your credit' : 'Continue'}
      </Button>
    </GridItem>
  );
};
