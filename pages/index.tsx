import finance from '@/assets/images/finance.png';
import bank from '@/assets/images/bank.png';
import { ActionCard, Header } from '@/components';
import { DashBoardLayout } from '@/layout';
import { DEFAULT_STYLES } from '@/styles';
import { Grid, GridItem } from '@chakra-ui/react';

export default function Home() {
  const topbar = <Header>Hello!</Header>;

  return (
    <DashBoardLayout topBar={topbar}>
      <Grid
        gridTemplateColumns='repeat(2,1fr)'
        mt='10'
        gridAutoRows='1fr'
        w='984px'
        columnGap='54px'
      >
        <GridItem>
          <ActionCard
            header='Financing'
            icon={finance}
            headerColor={DEFAULT_STYLES.lightPurple}
            title='Upfront funding to accelerate your growth'
            desc='Convert future revenue into upfront capital, without debt or dilution.'
            btnText='Get started'
          />
        </GridItem>

        <GridItem>
          <ActionCard
            header='Banking'
            icon={bank}
            headerColor={DEFAULT_STYLES.pink}
            title='Banking for what  you are building'
            desc='Get access to the cash management account built for startups.'
            btnText='Get started'
          />
        </GridItem>
      </Grid>
    </DashBoardLayout>
  );
}
