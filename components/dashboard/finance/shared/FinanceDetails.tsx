import { ColumnFlex } from '@/components/shared';
import { financeDetailsBody, financeDetailsHeaders } from '@/store';
import { DEFAULT_STYLES } from '@/styles';
import { Center, Divider, Flex, Grid, GridItem, Text } from '@chakra-ui/react';
import { ReactNode } from 'react';
import { AiOutlineDownload } from 'react-icons/ai';
import { TandaHDivider, TandaVDivider } from '../../shared';
import { FinanceCard } from './FinanceCard';
import { GrowActionCard } from './GrowActionCard';
import { RiBankLine } from 'react-icons/ri';
import { TbPercentage } from 'react-icons/tb';
import { WiMoonAltWaxingCrescent6 } from 'react-icons/wi';

interface Props {
  header: string;
  actionChildren: ReactNode;
}

export const FinanceDetails = ({ header, actionChildren }: Props) => {
  const renderDrawsHeaders = financeDetailsHeaders.map((item, i) => {
    const isLast = i === financeDetailsHeaders.length - 1;

    return (
      <GridItem key={`${item.name}_${i}`}>
        <ColumnFlex w='max-content'>
          <Text
            textStyle='title'
            fontSize='1rem'
            fontWeight={DEFAULT_STYLES.mediumbold}
            textAlign={isLast ? 'right' : 'left'}
          >
            {item.name}
          </Text>

          {item.other && (
            <Text
              textStyle='desc'
              fontWeight={DEFAULT_STYLES.mediumbold}
              opacity={0.3}
              color={DEFAULT_STYLES.primaryHeaderColor}
              textAlign='right'
            >
              {item.other}
            </Text>
          )}
        </ColumnFlex>
      </GridItem>
    );
  });

  const renderBody = financeDetailsBody.map((item, i) => {
    const isLast = i === financeDetailsHeaders.length - 1;

    return (
      <GridItem key={`${item.name}_${i}`}>
        <ColumnFlex align='center' w={item.other ? 'full' : 'max-content'}>
          <Text
            textStyle='desc'
            fontWeight={DEFAULT_STYLES.semibold}
            textAlign={isLast ? 'right' : 'left'}
          >
            {item.name}
          </Text>

          {item.other && (
            <Text
              textStyle='desc'
              fontWeight={DEFAULT_STYLES.semibold}
              opacity={0.3}
              color={DEFAULT_STYLES.primaryHeaderColor}
              textAlign='right'
            >
              {item.other}
            </Text>
          )}
        </ColumnFlex>
      </GridItem>
    );
  });

  return (
    <Grid
      gap='33px'
      templateColumns={{ base: '1fr', lg: 'repeat(4,1fr)' }}
      width={{ base: DEFAULT_STYLES.fullWidth, lg: 'max-content' }}
      px={DEFAULT_STYLES.mobilePx}
    >
      <GridItem
        minH='132px'
        layerStyle='card'
        display='flex'
        alignItems='center'
        justifyContent='center'
        flexDirection={{ base: 'column', md: 'row' }}
        colSpan={{ base: 1, lg: 3 }}
        p={{ base: '10px', md: '20px' }}
        gap='30px'
      >
        <FinanceCard
          title='Term cap'
          desc='12 months'
          icon={WiMoonAltWaxingCrescent6}
        />

        <TandaVDivider display={{ base: 'none', md: 'block' }} />
        <TandaHDivider display={{ base: 'block', md: 'none' }} />

        <FinanceCard
          title='Available Credit'
          desc='$22,644,94'
          icon={RiBankLine}
        />

        <TandaVDivider display={{ base: 'none', md: 'block' }} />
        <TandaHDivider display={{ base: 'block', md: 'none' }} />

        <FinanceCard title='Rate' desc='8.00%' icon={TbPercentage} />
      </GridItem>

      <GrowActionCard header={header}>{actionChildren}</GrowActionCard>

      <GridItem
        colSpan={4}
        display={{ base: 'none', lg: 'inherit' }}
        minH='417px'
        layerStyle='card'
        p='20px 30px'
        overflow='auto'
      >
        <Flex
          justify='space-between'
          align='center'
          w={DEFAULT_STYLES.fullWidth}
          mb='80px'
        >
          <Text
            textStyle='title'
            color={DEFAULT_STYLES.primaryHeaderColor}
            fontSize='1.4rem'
          >
            My draws
          </Text>

          <Center
            w='34px'
            h='31px'
            cursor='pointer'
            bg={DEFAULT_STYLES.lightGray}
            opacity={0.3}
            rounded='5px'
            _active={{
              transform: 'scale(0.97)',
            }}
          >
            <AiOutlineDownload size='1.4rem' />
          </Center>
        </Flex>

        <ColumnFlex w={DEFAULT_STYLES.fullWidth} gap='4'>
          <Grid templateColumns='repeat(6,1fr)' gap='8'>
            {renderDrawsHeaders}
          </Grid>

          <Divider />

          <Grid templateColumns='repeat(6,1fr)' gap='8'>
            {renderBody}
          </Grid>
        </ColumnFlex>
      </GridItem>
    </Grid>
  );
};
