import { ColumnFlex, Desc } from '@/components';
import { expenseTableBody } from '@/store';
import { DEFAULT_STYLES } from '@/styles';
import { Button, Checkbox, Flex, GridItem, Td, Text } from '@chakra-ui/react';
import { useState } from 'react';
import { TandaTable, TandaTableRow } from '../shared';

export const ExpenseTable = () => {
  const [show] = useState(false);

  const renderTableBody = expenseTableBody.map((e) => {
    return (
      <TandaTableRow key={e.id}>
        <Td>
          <Flex align='center' gap='4'>
            <Checkbox variant='pinkvariant' />
            <ColumnFlex>
              <Text>{e.description.name}</Text>
              <Desc>{e.description.desc}</Desc>
            </ColumnFlex>
          </Flex>
        </Td>

        <Td>
          {' '}
          <ColumnFlex>
            <Text>{e.date.day}</Text>
            <Desc>{e.date.time}</Desc>
          </ColumnFlex>
        </Td>

        <Td isNumeric fontWeight={DEFAULT_STYLES.semibold}>
          {e.amount}
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
      <TandaTable tableHeaders={['Vendor name', 'Due date', 'Amount']}>
        {renderTableBody}
      </TandaTable>

      {show && (
        <ColumnFlex w='max-content' alignSelf='center' align='center' gap='5'>
          <Text
            textStyle='bodyText'
            color={DEFAULT_STYLES.primaryHeaderColor}
            fontWeight={DEFAULT_STYLES.mediumbold}
            mt='10'
            alignSelf='center'
            textAlign='center'
          >
            You don’t have any invoice needing to be financed
          </Text>

          <Button bg={DEFAULT_STYLES.pink} color='white' size='smPadding'>
            Upload invoice now
          </Button>
        </ColumnFlex>
      )}
    </GridItem>
  );
};
