import { termcap } from '@/store';
import { containerStyles } from '@/styles';
import { Grid, GridItem } from '@chakra-ui/react';
import { ReactNode } from 'react';
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
        colSpan={3}
        p='30px'
      >
        <FinanceCard title='Term cap' desc='12 months' icon={termcap} />
      </GridItem>

      <GrowActionCard header={header}>{actionChildren}</GrowActionCard>

      <GridItem colSpan={4} minH='417px' {...containerStyles}></GridItem>
    </Grid>
  );
};
