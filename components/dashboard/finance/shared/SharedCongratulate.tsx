import { DEFAULT_STYLES } from '@/styles';
import { Grid, GridItem } from '@chakra-ui/react';
import { HelpText, NewPageCard } from '../../shared';
import { GrowActionCard } from './GrowActionCard';

export const SharedCongratulate = () => {
  return (
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
  );
};
