import { DEFAULT_STYLES } from 'styles';
import { Grid, GridItem } from '@chakra-ui/react';
import { HelpText, NewPageCard } from '../../shared';
import { GrowActionCard } from './GrowActionCard';
import { CongratulateBanner } from './CongratulateBanner';

interface Props {
  path?: string;
  title: string;
}

export const SharedCongratulate = ({ path, title }: Props) => {
  return (
    <Grid
      gap='33px'
      templateColumns={{ base: '1fr', lg: 'repeat(4,1fr)' }}
      px={DEFAULT_STYLES.mobilePx}
    >
      <CongratulateBanner colSpan={3} />

      <GrowActionCard header='Need some help?'>
        <HelpText />
      </GrowActionCard>

      <GridItem colSpan={3}>
        <NewPageCard
          title={title}
          desc='Access up to 60% of your predictable ARR on day one. Fuel your growth without taking on debt or diluting our equity.'
          path={path}
        />
      </GridItem>
    </Grid>
  );
};
