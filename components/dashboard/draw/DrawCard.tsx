import { ColumnFlex, Desc, TandaHDivider } from '@/components';
import { DrawStatus } from '@/models';
import { DrawChangeHandler, drawTab, useDrawStore } from '@/store';
import { DEFAULT_STYLES } from '@/styles';
import { ChevronRightIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Center,
  Flex,
  Grid,
  GridItem,
  Icon,
  Input,
  Radio,
  Text,
} from '@chakra-ui/react';
import { RiErrorWarningLine } from 'react-icons/ri';
import { DrawFlexItem } from './DrawFlexItem';
import { DrawInfo } from './DrawInfo';

export const DrawCard = () => {
  const { terms, selectedIndexs, repay, rate, total } = useDrawStore();

  const isInitTab = selectedIndexs.at(-1) === DrawStatus.Initialisation;
  const isConclusionTab = selectedIndexs.at(-1) === DrawStatus.Conclusion;

  const progressTab = drawTab.map((_, i, arr) => {
    const showRightBar = i === 0;
    const showLeftBar = i === arr.length - 1;
    const isActive = selectedIndexs.includes(i);

    return (
      <Flex align='center' key={i}>
        {showLeftBar && (
          <Box
            w='19px'
            h='3px'
            transition='all 0.3s ease'
            bg={isActive ? DEFAULT_STYLES.lightPurple : '#DBD7F4'}
          />
        )}

        <Center
          borderRadius='full'
          w='24px'
          h='24px'
          border={`3px solid ${DEFAULT_STYLES.lightPurple}`}
        >
          <Center
            w='14px'
            h='14px'
            bg={DEFAULT_STYLES.lightPurple}
            borderRadius='full'
            transition='all 0.3s ease'
            transform={isActive ? 'scale(1)' : 'scale(0)'}
          />
        </Center>
        {showRightBar && (
          <Box w='39px' h='3px' bg={DEFAULT_STYLES.lightPurple} />
        )}
      </Flex>
    );
  });

  const renderTabs = terms.map((term) => {
    return (
      <Flex
        key={term.id}
        border={
          term.isChecked ? `2px solid ${DEFAULT_STYLES.lightPurple}` : 'none'
        }
        bg={term.isChecked ? DEFAULT_STYLES.lightPurpleBg : 'transparent'}
        transition='background 0.3s linear'
        minH='63px'
        rounded='6px'
        padding='12px 18px'
        align='center'
        gap='20px'
        cursor='pointer'
        onClick={() => {
          if (term.isChecked) {
            DrawChangeHandler.onTermCheckedChange(false, term.id);
          } else {
            DrawChangeHandler.onTermCheckedChange(true, term.id);
          }
        }}
      >
        <Radio isChecked={term.isChecked} />

        <ColumnFlex>
          <Text textStyle='bodyText' color={DEFAULT_STYLES.darkGray}>
            <span
              style={{
                color: DEFAULT_STYLES.lightPurple,
                fontWeight: DEFAULT_STYLES.semibold,
              }}
            >
              {term.month} month{term.month > 1 ? 's' : ''}
            </span>{' '}
            of 2.00%
          </Text>

          <Text
            textStyle='bodyText'
            color={DEFAULT_STYLES.darkGray}
            fontWeight={DEFAULT_STYLES.mediumbold}
          >
            ${term.price.toFixed(2)}/month
          </Text>
        </ColumnFlex>
      </Flex>
    );
  });

  return (
    <GridItem
      colSpan={{ base: 1, md: 'auto', lg: 'auto' }}
      minH='598px'
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
        </>
      )}

      <Button
        variant='darkBtn'
        size='smPadding'
        onClick={() => {
          if (isInitTab) {
            DrawChangeHandler.onIndexChange(DrawStatus.Conclusion);
          }
        }}
        rightIcon={<ChevronRightIcon fontSize='1.5rem' />}
      >
        Continue
      </Button>
    </GridItem>
  );
};
