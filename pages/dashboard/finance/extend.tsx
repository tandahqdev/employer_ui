import {
  ActionTitle,
  ExtendNewExistPage,
  FinanceDetails,
  NewDrawBtn,
  SharedCongratulate,
} from '@/components';
import { DashBoardLayout } from '@/layout';
import { extendIcon } from '@/store';
import { DEFAULT_STYLES } from '@/styles';

const FinanceExtend = () => {
  const screenMain = false;
  const Congratulations = true;
  const financeS = false;

  const topbar = (
    <ActionTitle
      icon={extendIcon}
      header='Extend'
      headerColor={DEFAULT_STYLES.pink}
    />
  );

  return (
    <DashBoardLayout topBar={topbar}>
      {Congratulations && <SharedCongratulate title='Extend' />}

      {financeS && (
        <FinanceDetails
          header='Finance new expenses?'
          actionChildren={<NewDrawBtn btnText='Select Expenses' />}
        />
      )}

      {screenMain && <ExtendNewExistPage />}
    </DashBoardLayout>
  );
};

export default FinanceExtend;
