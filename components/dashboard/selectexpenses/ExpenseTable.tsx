import { ColumnFlex } from '@/components';
import { DEFAULT_STYLES } from '@/styles';
import { Button, GridItem, Text } from '@chakra-ui/react';
import { TandaTable } from '../shared';

export const ExpenseTable = () => {
  return (
    <GridItem
      colSpan={{ base: 1, md: 3, lg: 'auto' }}
      minH='417px'
      layerStyle='gridItem'
      justifyContent='flex-start'
      gap='50px'
      minW={DEFAULT_STYLES.fullWidth}
    >
      <TandaTable
        tableHeaders={['Vendor name', 'Due date', 'Amount']}
      ></TandaTable>

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
    </GridItem>
  );
};
