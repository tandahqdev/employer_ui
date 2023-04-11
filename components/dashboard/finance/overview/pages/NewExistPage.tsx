import { NewBanner, ExistingBanner, ActionCard } from '@/components';
import { growIcon, growcurve, extendIcon, extendcurve } from '@/store';
import { DEFAULT_STYLES } from '@/styles';
import { DashRoutes } from '@/utils';
import { SharedFinanceOverview } from '../SharedFinanceOverview';

export const NewExistPage = () => {
  return (
    <SharedFinanceOverview>
      <NewBanner />
      <ExistingBanner />

      <ActionCard
        header='Grow'
        icon={growIcon}
        headerColor={DEFAULT_STYLES.lightPurple}
        title='Upfront funding to accelerate your growth'
        desc='Access your  predictable recurring
                revenue on day one.'
        btnText='Learn more'
        isShowTopBtn
        path={DashRoutes.financeGrow}
        gradientImg={growcurve}
        atEdge
        showTexts
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
        btnText='Learn more'
        path={DashRoutes.financeExtend}
        gradientImg={extendcurve}
        showTexts
      />
    </SharedFinanceOverview>
  );
};
