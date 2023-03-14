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
import { growIcon } from '@/store';
import { DEFAULT_STYLES, sharedGridStyles } from '@/styles';
import { Grid, GridItem } from '@chakra-ui/react';

const FinanceGrow = () => {
  const screenMain = false;
  const evScreen = false;
  const Congratulations = true;
  const financeS = false;

  const topbar = (
    <ActionTitle
      icon={growIcon}
      header='Grow'
      headerColor={DEFAULT_STYLES.lightPurple}
    />
  );

  return (
    <DashBoardLayout topBar={topbar}>
      {Congratulations && <SharedCongratulate />}

      {financeS && (
        <FinanceDetails
          header='Need more funds?'
          actionChildren={<NewDrawBtn btnText='New draw' />}
        />
      )}

      {screenMain && (
        <Grid {...sharedGridStyles}>
          <NewBanner />
          {evScreen && <ExistingBanner />}

          <GridItem width={{ base: DEFAULT_STYLES.fullWidth, xl: '717px' }}>
            <NewPageCard
              title='Grow'
              desc='Access up to 60% of your predictable ARR on day one. Fuel your growth without taking on debt or diluting our equity.'
            />
          </GridItem>
        </Grid>
      )}
    </DashBoardLayout>
  );
};

export default FinanceGrow;
