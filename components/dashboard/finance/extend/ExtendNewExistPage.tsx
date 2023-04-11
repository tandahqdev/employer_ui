import { DEFAULT_STYLES } from '@/styles';
import { DashRoutes } from '@/utils';
import { Grid, GridItem } from '@chakra-ui/react';
import { NewBanner, ExistingBanner, NewPageCard } from '../../shared';

export const ExtendNewExistPage = () => {
  return (
    <Grid layerStyle='sharedGrid'>
      <NewBanner />
      <ExistingBanner />

      <GridItem width={{ base: DEFAULT_STYLES.fullWidth, md: '717px' }}>
        <NewPageCard
          title='Extend'
          desc='Take control of your cash flows by investing in bigger things today
          and paying back at your own pace.'
          path={DashRoutes.dashboard}
        />
      </GridItem>
    </Grid>
  );
};
