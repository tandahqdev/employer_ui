import { ActionTitle, NewBanner, NewPageCard } from '@/components';
import { DashBoardLayout } from '@/layout';
import { extendIcon } from '@/store';
import { DEFAULT_STYLES, sharedGridStyles } from '@/styles';
import { DashRoutes } from '@/utils';
import { Grid } from '@chakra-ui/react';

const FinanceExtend = () => {
  const topbar = (
    <ActionTitle
      icon={extendIcon}
      header='Extend'
      headerColor={DEFAULT_STYLES.pink}
    />
  );

  return (
    <DashBoardLayout topBar={topbar}>
      <Grid {...sharedGridStyles}>
        <NewBanner />
        <NewPageCard
          title='Extend'
          desc='Access up to 60% of your predictable ARR on day one. Fuel your growth without taking on debt or diluting our equity.'
          path={DashRoutes.dashboard}
        />
      </Grid>
    </DashBoardLayout>
  );
};

export default FinanceExtend;
