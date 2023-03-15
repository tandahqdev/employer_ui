import { ColumnFlex } from '@/components/shared';
import { DashBoardLayout } from '@/layout';
import { growIcon, extendIcon, growcurve, extendcurve } from '@/store';
import { sharedGridStyles, DEFAULT_STYLES } from '@/styles';
import { DashRoutes } from '@/utils';
import { AddIcon } from '@chakra-ui/icons';
import { Grid } from '@chakra-ui/react';
import { WelcomeCard, PageSecondaryTitle, ActionCard } from '../../shared';
import { CongratulateBanner } from '../shared/CongratulateBanner';

export const MainPage = () => {
  return (
    <DashBoardLayout topBar={<WelcomeCard name='John' />}>
      <ColumnFlex gap='5'>
        <PageSecondaryTitle />

        <Grid {...sharedGridStyles}>
          <CongratulateBanner colSpan={2} showBtns />

          <ActionCard
            header='Grow'
            icon={growIcon}
            headerColor={DEFAULT_STYLES.lightPurple}
            title='Upfront funding to accelerate your growth'
            desc='Access your  predictable recurring
                revenue on day one.'
            btnText='New draw'
            isShowTopBtn
            path={DashRoutes.dashboardFinanceGrow}
            gradientImg={growcurve}
            atEdge
            leftIcon={<AddIcon />}
          />

          <ActionCard
            header='Extend'
            icon={extendIcon}
            headerColor={DEFAULT_STYLES.pink}
            title='Smooth cash flows and
              avaid large impacful outflows'
            desc='Take control of your cash flows
              by buying now and paying later.'
            isShowTopBtn
            btnText='New extension'
            path={DashRoutes.dashboardFinanceExtend}
            gradientImg={extendcurve}
            leftIcon={<AddIcon />}
          />
        </Grid>
      </ColumnFlex>
    </DashBoardLayout>
  );
};
