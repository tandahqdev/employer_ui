import { ActionTitle, NewBanner, NewPageCard } from '@/components';
import { DashBoardLayout } from '@/layout';
import { growIcon } from '@/store';
import { DEFAULT_STYLES } from '@/styles';
import { Grid } from '@chakra-ui/react';

const FinanceGrow = () => {
  const topbar = (
    <ActionTitle
      icon={growIcon}
      header='Grow'
      headerColor={DEFAULT_STYLES.lightPurple}
    />
  );

  return (
    <DashBoardLayout topBar={topbar}>
      <Grid
        gridTemplateColumns='repeat(2,1fr)'
        w={DEFAULT_STYLES.pageWidth}
        rowGap='7'
      >
        <NewBanner />
        <NewPageCard
          title='Grow'
          desc='Access up to 60% of your predictable ARR on day one. Fuel your growth without taking on debt or diluting our equity.'
        />
      </Grid>
    </DashBoardLayout>
  );
};

export default FinanceGrow;