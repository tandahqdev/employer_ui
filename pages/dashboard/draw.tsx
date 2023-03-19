import { Header } from '@/components';
import { DashBoardLayout } from '@/layout';
import { DEFAULT_STYLES } from '@/styles';
import { Grid, GridItem } from '@chakra-ui/react';

const DashboardDraw = () => {
  const topbar = <Header>New draw set up</Header>;

  return (
    <DashBoardLayout topBar={topbar} showBckBtn>
      <Grid
        gap={{ base: '33px', lg: '10px', xl: '33px' }}
        templateColumns={{
          base: '1fr',
          md: 'repeat(2,1fr)',
          lg: 'repeat(2,600px 330px)',
          xl: 'repeat(2,627px 340px)',
          '2xl': 'repeat(2,727px 424px)',
        }}
        px={DEFAULT_STYLES.mobilePx}
        w='full'
      >
        <GridItem
          colSpan={{ base: 1, lg: 'auto' }}
          minH='417px'
          alignItems='center'
          layerStyle='gridItem'
          gap='7'
        ></GridItem>

        <GridItem
          colSpan={{ base: 1, lg: 'auto' }}
          minH='598px'
          alignItems='center'
          layerStyle='gridItem'
          gap='7'
        ></GridItem>
      </Grid>
    </DashBoardLayout>
  );
};

export default DashboardDraw;
