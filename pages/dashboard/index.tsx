import { ActionCard, Header } from '@/components';
import { DashBoardLayout } from '@/layout';
import { bankIcon, financeIcon } from '@/store';
import { DEFAULT_STYLES, sharedGridStyles } from '@/styles';
import { DashRoutes } from '@/utils';
import { Grid, GridItem } from '@chakra-ui/react';

export default function Home() {
  const topbar = <Header>Hello!</Header>;

  return (
    <DashBoardLayout topBar={topbar}>
      <Grid {...sharedGridStyles}>
        <GridItem>
          <ActionCard
            header='Financing'
            icon={financeIcon}
            headerColor={DEFAULT_STYLES.lightPurple}
            title='Upfront funding to accelerate your growth'
            desc='Convert future revenue into upfront capital, without debt or dilution.'
            btnText='Get started'
            path={DashRoutes.dashboardFinanceOverview}
          />
        </GridItem>

        <GridItem>
          <ActionCard
            header='Banking'
            icon={bankIcon}
            headerColor={DEFAULT_STYLES.pink}
            path={DashRoutes.dashboardBankOverview}
            title='Banking for what  you are building'
            desc='Get access to the cash management account built for startups.'
            btnText='Get started'
          />
        </GridItem>
      </Grid>
    </DashBoardLayout>
  );
}
