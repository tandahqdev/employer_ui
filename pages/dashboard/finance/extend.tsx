import Link from 'next/link';
import {
  ActionTitle,
  ExtendNewExistPage,
  FinanceDetails,
  UtilsBtn,
  SharedCongratulate,
} from '@/components';
import { DashBoardLayout } from '@/layout';
import { extendIcon } from '@/store';
import { DEFAULT_STYLES } from '@/styles';
import { DashRoutes } from '@/utils';

const FinanceExtend = () => {
  const screenMain = false;
  const Congratulations = false;
  const financeS = true;

  const topbar = (
    <ActionTitle
      icon={extendIcon}
      header='Extend'
      headerColor={DEFAULT_STYLES.pink}
    />
  );

  return (
    <DashBoardLayout header={topbar}>
      {Congratulations && <SharedCongratulate title='Extend' />}

      {financeS && (
        <FinanceDetails
          header='Finance new expenses?'
          actionChildren={
            <Link
              href={DashRoutes.expense}
              style={{
                width: DEFAULT_STYLES.fullWidth,
              }}
            >
              <UtilsBtn btnText='Select Expenses' />
            </Link>
          }
        />
      )}

      {screenMain && <ExtendNewExistPage />}
    </DashBoardLayout>
  );
};

export default FinanceExtend;
