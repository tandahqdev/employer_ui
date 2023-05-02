import { DEFAULT_STYLES } from 'styles';
import { Grid, GridItem } from '@chakra-ui/react';
import { NewBanner, ExistingBanner, NewPageCard } from '../../shared';

export const GrowNewExistPage = () => {
  return (
    <Grid layerStyle='sharedGrid'>
      <NewBanner />
      <ExistingBanner />

      <GridItem width={{ base: DEFAULT_STYLES.fullWidth, md: '717px' }}>
        <NewPageCard
          title='Grow'
          desc='Access up to 60% of your predictable ARR on day one. Fuel your growth without taking on debt or diluting our equity.'
        />
      </GridItem>
    </Grid>
  );
};
