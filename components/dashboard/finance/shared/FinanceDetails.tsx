import { credit, rate, termcap } from '@/store';
import { containerStyles, DEFAULT_STYLES } from '@/styles';
import { Center, Flex, Grid, GridItem, Text } from '@chakra-ui/react';
import { ReactNode } from 'react';
import { AiOutlineDownload } from 'react-icons/ai';
import { TandaVDivider } from '../../shared';
import { FinanceCard } from './FinanceCard';
import { GrowActionCard } from './GrowActionCard';

interface Props {
  header: string;
  actionChildren: ReactNode;
}

export const FinanceDetails = ({ header, actionChildren }: Props) => {
  return (
    <Grid gap='33px' templateColumns='repeat(4,1fr)'>
      <GridItem
        minH='132px'
        {...containerStyles}
        display='flex'
        alignItems='center'
        justifyContent='center'
        colSpan={3}
        p='30px'
        gap='30px'
      >
        <FinanceCard title='Term cap' desc='12 months' icon={termcap} />

        <TandaVDivider />

        <FinanceCard title='Available Credit' desc='$22,644,94' icon={credit} />

        <TandaVDivider />

        <FinanceCard title='Rate' desc='8.00%' icon={rate} />
      </GridItem>

      <GrowActionCard header={header}>{actionChildren}</GrowActionCard>

      <GridItem colSpan={4} minH='417px' {...containerStyles} p='20px 30px'>
        <Flex
          justify='space-between'
          align='center'
          w={DEFAULT_STYLES.fullWidth}
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

        <Grid gap='33px' templateColumns='repeat(4,1fr)'></Grid>
      </GridItem>
    </Grid>
  );
};
