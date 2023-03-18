import { ActionCard } from '@/components/dashboard/shared';
import { growIcon, extendIcon } from '@/store';
import { DEFAULT_STYLES } from '@/styles';
import { DashRoutes } from '@/utils';
import { AddIcon } from '@chakra-ui/icons';
import { PaymentDetails } from '../PaymentDetails';
import { SharedFinanceOverview } from '../SharedFinanceOverview';
import { Transaction } from '../Transaction';

export const SecondMainPage = () => {
  return (
    <SharedFinanceOverview>
      <PaymentDetails />

      <ActionCard
        header='Grow'
        icon={growIcon}
        headerColor={DEFAULT_STYLES.lightPurple}
        btnText='New draw'
        isShowTopBtn
        path={DashRoutes.dashboardFinanceGrow}
        leftIcon={<AddIcon />}
        btnBg={DEFAULT_STYLES.lightPurple}
        info='2 active draws'
      />

      <ActionCard
        header='Extend'
        icon={extendIcon}
        headerColor={DEFAULT_STYLES.pink}
        isShowTopBtn
        btnText='New extension'
        path={DashRoutes.dashboardFinanceExtend}
        leftIcon={<AddIcon />}
        btnBg={DEFAULT_STYLES.pink}
        info='2 active draws'
      />

      <Transaction buttons={['Upcoming Debits', 'Complete Transactions']} />
    </SharedFinanceOverview>
  );
};
