import { ColumnFlex } from '@/components/shared';
import { DEFAULT_STYLES } from '@/styles';
import {
  GridItem,
  Flex,
  Text,
  Icon,
  Button,
  Center,
  HStack,
  Table,
  TableContainer,
  Th,
  Thead,
  Tr,
  Tbody,
  Td,
} from '@chakra-ui/react';
import { useState } from 'react';
import { AiOutlineDownload } from 'react-icons/ai';
import { RiErrorWarningLine } from 'react-icons/ri';

interface Props {
  buttons: string[];
  tableData?: {
    dueDate: string;
    status: string;
    expected: string;
    outstanding: string;
  }[];
}

export const Transaction = ({ buttons, tableData }: Props) => {
  const [isActive, setIsActive] = useState(0);

  const renderButtons = buttons.map((text, i) => {
    const isSelected = isActive === i;

    return (
      <Button
        key={`${text}_${i}`}
        size='smPadding'
        onClick={() => {
          setIsActive(i);
        }}
        color={
          isSelected
            ? DEFAULT_STYLES.lightPurple
            : DEFAULT_STYLES.primaryHeaderColor
        }
        opacity={isSelected ? 1 : 0.5}
        bg={isSelected ? 'rgba(110, 49, 240, 0.2)' : 'transparent'}
      >
        {text}
      </Button>
    );
  });

  const renderTableHeaders = [
    'Due Date',
    'Status',
    'Expected Repayment',
    'Outstanding',
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

  const renderTableBody = tableData?.map((item, i) => {
    return (
      <Tr key={`${item.dueDate}_${i}`}>
        <Td>inches</Td>
        <Td isNumeric>millimetres (mm)</Td>
        <Td isNumeric>25.4</Td>
      </Tr>
    );
  });

  return (
    <GridItem
      colSpan={2}
      display={{ base: 'none', lg: 'flex' }}
      minH='379px'
      alignItems='center'
      justifyContent='flex-start'
      flexDirection='column'
      layerStyle='card'
      p='20px 30px'
      gap='7'
    >
      <Flex align='center' gap='1.5' w={DEFAULT_STYLES.fullWidth}>
        <Text
          textStyle='title'
          color={DEFAULT_STYLES.primaryHeaderColor}
          fontSize='1.4rem'
        >
          Your Transactions
        </Text>

        <Icon as={RiErrorWarningLine} color='#A3A7B7' />
      </Flex>

      <Flex justify='space-between' align='center' w={DEFAULT_STYLES.fullWidth}>
        <HStack>{renderButtons}</HStack>

        <Center
          w='34px'
          h='31px'
          cursor='pointer'
          bg={DEFAULT_STYLES.lightGray}
          opacity={0.3}
          rounded='5px'
          _active={{
            transform: 'scale(0.97)',
          }}
        >
          <AiOutlineDownload size='1.4rem' />
        </Center>
      </Flex>

      <TableContainer w={DEFAULT_STYLES.fullWidth}>
        <Table variant='simple'>
          <Thead>
            <Tr>{renderTableHeaders}</Tr>
          </Thead>

          <Tbody>{renderTableBody}</Tbody>
        </Table>
      </TableContainer>

      {!tableData && (
        <ColumnFlex mt='10' gap='1'>
          <Text textStyle='title' color={DEFAULT_STYLES.darkGray}>
            You don’t have any payments pending
          </Text>

          <Button variant='textBtn'>Launch a new draw</Button>
        </ColumnFlex>
      )}
    </GridItem>
  );
};
