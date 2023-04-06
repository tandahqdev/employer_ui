import { ColumnFlex } from '@/components/shared';
import { cardExamples } from '@/store';
import { DEFAULT_STYLES } from '@/styles';
import { Grid } from '@chakra-ui/react';
import { Card } from './Card';

export const CardPage = () => {
  const renderCardExample = cardExamples.map((item) => {
    return <Card data={item} key={item.id} />;
  });

  return (
    <ColumnFlex>
      <Grid
        w={DEFAULT_STYLES.fullWidth}
        mx={DEFAULT_STYLES.mobilePx}
        minH='max-content'
        templateColumns={{
          base: 'repeat(1,1fr)',
          md: 'repeat(2,360px)',
          xl: 'repeat(3,327px)',
          '2xl': 'repeat(3,360px)',
        }}
        gap='20px'
      >
        {renderCardExample}
      </Grid>
    </ColumnFlex>
  );
};
