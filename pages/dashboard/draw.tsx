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
  const topbar = <Header>New draw set up</Header>;

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
          md: 'repeat(2,1fr)',
          lg: 'repeat(2,600px 330px)',
          xl: 'repeat(2,627px 340px)',
          '2xl': 'repeat(2,727px 424px)',
        }}
        alignItems='flex-start'
        px={DEFAULT_STYLES.mobilePx}
        w={DEFAULT_STYLES.fullWidth}
      >
        <GridItem
          colSpan={{ base: 1, lg: 'auto' }}
          minH='417px'
          layerStyle='gridItem'
          justifyContent='flex-start'
          gap='50px'
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
          colSpan={{ base: 1, lg: 'auto' }}
          minH='598px'
          layerStyle='gridItem'
        ></GridItem>
      </Grid>
    </DashBoardLayout>
  );
};

export default DashboardDraw;
