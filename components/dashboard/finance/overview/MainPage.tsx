import { growIcon, extendIcon, growcurve, extendcurve } from '@/store';
import { DEFAULT_STYLES } from '@/styles';
import { DashRoutes } from '@/utils';
import { AddIcon } from '@chakra-ui/icons';
import { ActionCard } from '../../shared';
import { CongratulateBanner } from '../shared/CongratulateBanner';
import { SharedFinanceOverview } from './SharedFinanceOverview';
import { Transaction } from './Transaction';

export const MainPage = () => {
  return (
    <SharedFinanceOverview>
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

      <Transaction />
    </SharedFinanceOverview>
  );
};
