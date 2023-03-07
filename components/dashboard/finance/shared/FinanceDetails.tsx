import { credit, rate, termcap } from '@/store';
import { containerStyles } from '@/styles';
import { Grid, GridItem } from '@chakra-ui/react';
import { ReactNode } from 'react';
import { TandaVDivider } from '../../shared/TandaDivider';
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

      <GridItem colSpan={4} minH='417px' {...containerStyles}></GridItem>
    </Grid>
  );
};
