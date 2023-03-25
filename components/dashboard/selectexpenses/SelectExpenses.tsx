import { DashBoardLayout } from '@/layout';
import { DEFAULT_STYLES } from '@/styles';
import { Grid } from '@chakra-ui/react';
import { DrawTable, DrawCard } from '../draw';
import { Header } from '../shared';

export const SelectExpenses = () => {
  const topbar = (
    <Header fontSize={{ base: '1.1rem', md: '1.5rem' }}>New draw set up</Header>
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
