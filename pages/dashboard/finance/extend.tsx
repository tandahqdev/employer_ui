import {
  ActionTitle,
  ExistingBanner,
  FinanceDetails,
  NewBanner,
  NewDrawBtn,
  NewPageCard,
  SharedCongratulate,
} from '@/components';
import { DashBoardLayout } from '@/layout';
import { extendIcon } from '@/store';
import { DEFAULT_STYLES, sharedGridStyles } from '@/styles';
import { DashRoutes } from '@/utils';
import { Grid, GridItem } from '@chakra-ui/react';

const FinanceExtend = () => {
  const screenMain = false;
  const evScreen = false;
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
    <DashBoardLayout topBar={topbar}>
      {Congratulations && <SharedCongratulate />}

      {financeS && (
        <FinanceDetails
          header='Finance new expenses?'
          actionChildren={<NewDrawBtn btnText='Select Expenses' />}
        />
      )}

      {screenMain && (
        <Grid {...sharedGridStyles}>
          <NewBanner />
          {evScreen && <ExistingBanner />}
          <GridItem width={{ base: DEFAULT_STYLES.fullWidth, md: '717px' }}>
            <NewPageCard
              title='Extend'
              desc='Take control of your cash flows by investing in bigger things today
          and paying back at your own pace.'
              path={DashRoutes.dashboard}
            />
          </GridItem>
        </Grid>
      )}
    </DashBoardLayout>
  );
};

export default FinanceExtend;
