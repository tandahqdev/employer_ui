import { ColumnFlex, Desc } from '@/components';
import { drawTable } from '@/store';
import { DEFAULT_STYLES } from '@/styles';
import { GridItem, Text, Td } from '@chakra-ui/react';
import { useState } from 'react';
import { TandaTable, TandaTableRow } from '../shared';

export const DrawTable = () => {
  const [show] = useState(false);

  const renderTableBody = drawTable.map((e) => {
    return (
      <TandaTableRow key={e.id}>
        <Td>{e.month}</Td>
        <Td>
          <ColumnFlex>
            <Text color={DEFAULT_STYLES.lightPurple}>{e.draw.amount}</Text>
            <Desc>{e.draw.month}</Desc>
          </ColumnFlex>
        </Td>
        <Td>{e.exist}</Td>
        <Td isNumeric fontWeight={DEFAULT_STYLES.semibold}>
          {e.total}
        </Td>
      </TandaTableRow>
    );
  });

  return (
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

      <TandaTable
        tableHeaders={['Month', 'New Draw', 'Existing Draws', 'Total']}
      >
        {renderTableBody}
      </TandaTable>

      {show && (
        <Text
          textStyle='bodyText'
          color={DEFAULT_STYLES.primaryHeaderColor}
          fontWeight={DEFAULT_STYLES.mediumbold}
          mt='10'
          alignSelf='center'
          textAlign='center'
        >
          Add a new draw amount to preview your schedule
        </Text>
      )}
    </GridItem>
  );
};
