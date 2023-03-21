import {
  ActionTitle,
  FinanceDetails,
  GrowNewExistPage,
  NewDrawBtn,
  SharedCongratulate,
} from '@/components';
import { DashBoardLayout } from '@/layout';
import { growIcon } from '@/store';
import { DEFAULT_STYLES } from '@/styles';
import { DashRoutes } from '@/utils';

const FinanceGrow = () => {
  const screenMain = false;
  const congratulations = false;
  const financeS = true;

  const topbar = (
    <ActionTitle
      icon={growIcon}
      header='Grow'
      headerColor={DEFAULT_STYLES.lightPurple}
      textProps={{
        fontSize: '1.3rem',
      }}
    />
  );

  return (
    <DashBoardLayout topBar={topbar}>
      {congratulations && (
        <SharedCongratulate path={DashRoutes.dashboard} title='Grow' />
      )}

      {financeS && (
        <FinanceDetails
          header='Need more funds?'
          actionChildren={<NewDrawBtn btnText='New draw' />}
        />
      )}

      {screenMain && <GrowNewExistPage />}
    </DashBoardLayout>
  );
};

export default FinanceGrow;
