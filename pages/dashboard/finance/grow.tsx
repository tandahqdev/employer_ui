import {
  ActionTitle,
  GrowActionCard,
  HelpText,
  NewBanner,
  NewPageCard,
} from '@/components';
import { DashBoardLayout } from '@/layout';
import { growIcon } from '@/store';
import { DEFAULT_STYLES, sharedGridStyles } from '@/styles';
import { Grid, GridItem } from '@chakra-ui/react';

const FinanceGrow = () => {
  const topbar = (
    <ActionTitle
      icon={growIcon}
      header='Grow'
      headerColor={DEFAULT_STYLES.lightPurple}
    />
  );

  const isOtherScreens = true;

  return (
    <DashBoardLayout topBar={topbar}>
      {isOtherScreens && (
        <Grid gap='33px' templateColumns='repeat(4,1fr)'>
          <GridItem
            minH='212px'
            border={DEFAULT_STYLES.border}
            borderRadius={DEFAULT_STYLES.borderRadius}
            bg={DEFAULT_STYLES.white}
            colSpan={3}
          ></GridItem>
          <GrowActionCard header='Need some help?'>
            <HelpText />
          </GrowActionCard>

          <GridItem colSpan={3}>
            <NewPageCard
              title='Grow'
              desc='Access up to 60% of your predictable ARR on day one. Fuel your growth without taking on debt or diluting our equity.'
            />
          </GridItem>
        </Grid>
      )}

      {!isOtherScreens && (
        <Grid {...sharedGridStyles}>
          <NewBanner />

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
