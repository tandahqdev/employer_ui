import {
  ActionCard,
  ColumnFlex,
  ExistingBanner,
  NewBanner,
  PageSecondaryTitle,
  WelcomeCard,
} from '@/components';
import { DashBoardLayout } from '@/layout';
import { growIcon, extendIcon } from '@/store';
import { DEFAULT_STYLES, sharedGridStyles } from '@/styles';
import { DashRoutes } from '@/utils';
import { Grid, GridItem } from '@chakra-ui/react';

const FinanceOverview = () => {
  // const topbar = <Header>Hello!</Header>;

  return (
    <DashBoardLayout topBar={<WelcomeCard name='John' />}>
      <ColumnFlex gap='5'>
        <PageSecondaryTitle />

        <Grid {...sharedGridStyles}>
          {false && <NewBanner />}
          <ExistingBanner />
          <GridItem>
            <ActionCard
              header='Grow'
              icon={growIcon}
              headerColor={DEFAULT_STYLES.lightPurple}
              title='Upfront funding to accelerate your growth'
              desc='Access your  predictable recurring
                revenue on day one.'
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
              title='Smooth cash flows and
              avaid large impacful outflows'
              desc='Take control of your cash flows
              by buying now and paying later.'
              isShowTopBtn
              btnText='Learn more'
              path={DashRoutes.dashboardFinanceExtend}
            />
          </GridItem>
        </Grid>
      </ColumnFlex>
    </DashBoardLayout>
  );
};

export default FinanceOverview;
