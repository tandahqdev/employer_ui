import { DashBoardLayout } from '@/layout';
import { DEFAULT_STYLES } from '@/styles';
import { Grid } from '@chakra-ui/react';
import { DrawTable, DrawCard } from '../draw';
import { ProfileNavCard } from '../shared';

export const SelectExpenses = () => {
  const topbar = (
    <ProfileNavCard
      title='Expense finance'
      desc='Please select the transactions you want to finance with us and choose your payment terms'
    />
  );

  return (
    <DashBoardLayout topBar={topbar} showBckBtn>
      <Grid
        gap={{ base: '33px', lg: '10px', xl: '33px' }}
        templateColumns={{
          base: '1fr',
          md: 'repeat(3,1fr)',
          lg: 'repeat(2,600px 330px)',
          xl: 'repeat(2,627px 340px)',
          '2xl': 'repeat(2,727px 424px)',
        }}
        alignItems='flex-start'
        px={DEFAULT_STYLES.mobilePx}
        w={DEFAULT_STYLES.fullWidth}
      >
        <DrawTable />
        <DrawCard />
      </Grid>
    </DashBoardLayout>
  );
};
