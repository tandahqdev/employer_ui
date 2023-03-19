import { Header } from '@/components';
import { DashBoardLayout } from '@/layout';
import { DEFAULT_STYLES } from '@/styles';
import {
  Grid,
  GridItem,
  Table,
  TableContainer,
  Text,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';

const DashboardDraw = () => {
  const topbar = (
    <Header fontSize={{ base: '1.1rem', md: '1.5rem' }}>New draw set up</Header>
  );

  const renderTableHeaders = [
    'Month',
    'New Draw',
    'Existing Draws',
    'Total',
  ].map((h, i, arr) => {
    const isNumeric = i === arr.length - 1 || i === arr.length - 2;
    return (
      <Th
        key={`${h}+${i}`}
        isNumeric={isNumeric}
        color={DEFAULT_STYLES.primaryHeaderColor}
        opacity={0.8}
      >
        <Text>{h}</Text>
      </Th>
    );
  });

  return (
    <DashBoardLayout topBar={topbar} showBckBtn>
      <Grid
        gap={{ base: '33px', lg: '10px', xl: '33px' }}
        templateColumns={{
          base: '1fr',
          md: 'repeat(3,1fr)',
          lg: 'repeat(2,600px 330px)',
          xl: 'repeat(2,627px 340px)',
          '2xl': 'repeat(2,727px 424px)',
        }}
        alignItems='flex-start'
        px={DEFAULT_STYLES.mobilePx}
        w={DEFAULT_STYLES.fullWidth}
      >
        <GridItem
          colSpan={{ base: 1, md: 3, lg: 'auto' }}
          minH='417px'
          layerStyle='gridItem'
          justifyContent='flex-start'
          gap='50px'
          minW={DEFAULT_STYLES.fullWidth}
        >
          <Text
            textStyle='title'
            color={DEFAULT_STYLES.primaryHeaderColor}
            fontSize='1.4rem'
          >
            Payment Schedule
          </Text>

          <TableContainer minW={DEFAULT_STYLES.fullWidth}>
            <Table variant='simple'>
              <Thead>
                <Tr>{renderTableHeaders}</Tr>
              </Thead>
            </Table>
          </TableContainer>
        </GridItem>

        <GridItem
          colSpan={{ base: 1, md: 'auto', lg: 'auto' }}
          minH='598px'
          width={{ base: 'auto', md: '374px', lg: 'auto' }}
          layerStyle='gridItem'
          gridRowStart={{ base: 1, lg: 'auto' }}
        ></GridItem>
      </Grid>
    </DashBoardLayout>
  );
};

export default DashboardDraw;
