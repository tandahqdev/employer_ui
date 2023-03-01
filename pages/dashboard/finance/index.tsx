import { ActionCard, Header, NewBanner } from '@/components';
import { DashBoardLayout } from '@/layout';
import { growIcon, extendIcon } from '@/store';
import { DEFAULT_STYLES, sharedGridStyles } from '@/styles';
import { DashRoutes } from '@/utils';
import { Grid, GridItem } from '@chakra-ui/react';

const FinanceOverview = () => {
  const topbar = <Header>Hello!</Header>;

  return (
    <DashBoardLayout topBar={topbar}>
      <Grid {...sharedGridStyles}>
        <NewBanner />

        <GridItem>
          <ActionCard
            header='Grow'
            icon={growIcon}
            headerColor={DEFAULT_STYLES.lightPurple}
            title='Upfront funding to accelerate your growth'
            desc='Convert future revenue into upfront capital, without debt or dilution.'
            btnText='Learn more'
            isShowTopBtn
            path={DashRoutes.dashboardFinanceGrow}
          />
        </GridItem>

        <GridItem>
          <ActionCard
            header='Extend'
            icon={extendIcon}
            headerColor={DEFAULT_STYLES.pink}
            title='Banking for what  you are building'
            desc='Get access to the cash management account built for startups.'
            isShowTopBtn
            btnText='Learn more'
            path={DashRoutes.dashboardFinanceExtend}
          />
        </GridItem>
      </Grid>
    </DashBoardLayout>
  );
};

export default FinanceOverview;
