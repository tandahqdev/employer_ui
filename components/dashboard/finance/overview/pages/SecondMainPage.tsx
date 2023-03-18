import { ActionCard, TandaHDivider } from '@/components';
import { growIcon, extendIcon } from '@/store';
import { DEFAULT_STYLES } from '@/styles';
import { DashRoutes } from '@/utils';
import { AddIcon } from '@chakra-ui/icons';
import { FinanceActionCardDetails } from '../FinanceActionCardDetails';
import { PaymentDetails } from '../PaymentDetails';
import { SharedFinanceOverview } from '../SharedFinanceOverview';
import { Transaction } from '../Transaction';

export const SecondMainPage = () => {
  // Calculations to use for the bar percent
  const percent = (5000 / 100000) * 100;
  const percent2 = (25000 / 100000) * 100;

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
        details={
          <>
            <FinanceActionCardDetails
              title='Outstanding'
              subTitle='$5,000'
              priceDesc='$100,000'
              bg='linear-gradient(90deg, #6631FF 43.06%, rgba(244, 214, 94, 0.5) 94.79%)'
              percent={`${percent}`}
            />

            <TandaHDivider />

            <FinanceActionCardDetails title='Rate' subTitle='12.00%' />
          </>
        }
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
        details={
          <>
            <FinanceActionCardDetails
              title='Outstanding'
              subTitle='$25,000'
              priceDesc='$100,000'
              bg='linear-gradient(270deg, #EF567E 50%, rgba(239, 86, 126, 0.64) 63.42%);'
              percent={`${percent2}`}
            />

            <TandaHDivider />

            <FinanceActionCardDetails title='Rate' subTitle='12.00%' />
          </>
        }
      />

      <Transaction buttons={['Upcoming Debits', 'Complete Transactions']} />
    </SharedFinanceOverview>
  );
};
