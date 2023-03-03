import {
  ActionCard,
  ColumnFlex,
  ExistingBanner,
  NewBanner,
  WelcomeCard,
} from '@/components';
import { DashBoardLayout } from '@/layout';
import { growIcon, extendIcon } from '@/store';
import { DEFAULT_STYLES, sharedGridStyles } from '@/styles';
import { DashRoutes } from '@/utils';
import { Grid, GridItem, Text } from '@chakra-ui/react';

const FinanceOverview = () => {
  // const topbar = <Header>Hello!</Header>;

  return (
    <DashBoardLayout topBar={<WelcomeCard name='John' />}>
      <ColumnFlex gap='5'>
        <ColumnFlex gap='0.5'>
          <Text textStyle='title'>Financing overview</Text>

          <Text
            textStyle='bodyText'
            color={DEFAULT_STYLES.primaryColor}
            opacity={0.4}
          >
            A quick glance at the aggregated status of your financing products
            with tanda
          </Text>
        </ColumnFlex>

        <Grid {...sharedGridStyles}>
          <NewBanner />
          <ExistingBanner />

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
      </ColumnFlex>
    </DashBoardLayout>
  );
};

export default FinanceOverview;
