import { ColumnFlex, Desc } from 'components';
import { expenseTableBody } from 'store';
import { DEFAULT_STYLES } from 'styles';
import { Button, Checkbox, Flex, GridItem, Td, Text } from '@chakra-ui/react';
import { useState } from 'react';
import { TandaTable, TandaTableRow } from '../shared';

export const ExpenseTable = () => {
  const [show] = useState(false);
  const [isSelected, setIsSelected] = useState<string[]>([]);

  const renderTableBody = expenseTableBody.map((e) => {
    const isActive = isSelected.includes(e.id);

    return (
      <TandaTableRow
        key={e.id}
        cursor='pointer'
        transition={DEFAULT_STYLES.transition}
        bg={isActive ? DEFAULT_STYLES.lightPinkBg : 'inherit'}
        onClick={() => {
          isActive
            ? setIsSelected(isSelected.filter((id) => id !== e.id))
            : setIsSelected((p) => [...p, e.id]);
        }}
      >
        <Td>
          <Flex align='center' gap='4'>
            <Checkbox variant='pink' isChecked={isActive} />
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
      gap='50px'
      justifyContent={show ? 'center' : 'flex-start'}
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
