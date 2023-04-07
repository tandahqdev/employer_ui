import { ColumnFlex } from '@/components/shared';
import { DEFAULT_STYLES } from '@/styles';
import { Grid } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface Props {
  renderItems: ReactNode;
  tableSection: ReactNode;
}

export const SharedCardContainer = ({ renderItems, tableSection }: Props) => {
  return (
    <ColumnFlex gap='75px'>
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
        {renderItems}
      </Grid>

      <ColumnFlex layerStyle='card' w='full' minH='400px'>
        {tableSection}
      </ColumnFlex>
    </ColumnFlex>
  );
};
