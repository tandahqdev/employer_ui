import Link from 'next/link';
import {
  ActionTitle,
  FinanceDetails,
  GrowNewExistPage,
  DrawBtn,
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
          actionChildren={
            <Link
              href={DashRoutes.draw}
              style={{
                width: DEFAULT_STYLES.fullWidth,
              }}
            >
              <DrawBtn btnText='New draw' />
            </Link>
          }
        />
      )}

      {screenMain && <GrowNewExistPage />}
    </DashBoardLayout>
  );
};

export default FinanceGrow;

// <Text textStyle='subtitle'>Your Draw is all set!</Text>

//         <Text textStyle='desc' opacity={0.7}>
//           You have successfully launched your Draw. It will remain on a
//           pending state until we review it internally. This process usually
//           takes a few minutes to a couple of hours. Once reviewed, the cash
//           will be transferred to your account and you will be notified.
//         </Text>
