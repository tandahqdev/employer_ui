import { ColumnFlex } from '@/components/shared';
import { TransactionData } from '@/models/finance';
import { DEFAULT_STYLES } from '@/styles';
import { DashRoutes } from '@/utils';
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
import Link from 'next/link';
import { useState } from 'react';
import { AiFillInfoCircle, AiOutlineDownload } from 'react-icons/ai';
import { RiErrorWarningLine } from 'react-icons/ri';
import { WiMoonAltWaxingCrescent6 } from 'react-icons/wi';

interface Props {
  buttons: string[];
  tableData?: TransactionData[];
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
        bg={isSelected ? DEFAULT_STYLES.lightPurpleBg : 'transparent'}
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
        opacity={DEFAULT_STYLES.opacity}
      >
        <Text>{h}</Text>
      </Th>
    );
  });

  const renderTableBody = tableData?.map((item, i) => {
    return (
      <Tr key={`${item.outstanding}_${i}`} textStyle='desc'>
        <Td>{item.dueDate}</Td>
        <Td>
          <Center
            rounded={8}
            p='8px 0px'
            gap='3'
            bg={
              item.statusBg
                ? DEFAULT_STYLES.lightPurpleBg
                : DEFAULT_STYLES.lightGrayBg
            }
            color={
              item.statusBg
                ? DEFAULT_STYLES.lightPurple
                : DEFAULT_STYLES.darkGray
            }
          >
            <Icon
              as={item.statusBg ? WiMoonAltWaxingCrescent6 : AiFillInfoCircle}
            />
            <Text
              textStyle='desc'
              textTransform='capitalize'
              fontWeight={DEFAULT_STYLES.semibold}
              color={
                item.statusBg
                  ? DEFAULT_STYLES.lightPurple
                  : DEFAULT_STYLES.darkGray
              }
            >
              {item.status}
            </Text>
          </Center>
        </Td>
        <Td isNumeric>{`$${item.paymentData.repay}`}</Td>
        <Td isNumeric>{`$${item.paymentData.outstanding}`}</Td>
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

      <TableContainer minW={DEFAULT_STYLES.fullWidth}>
        <Table variant='simple'>
          <Thead>
            <Tr>{renderTableHeaders}</Tr>
          </Thead>

          <Tbody>{renderTableBody}</Tbody>
        </Table>
      </TableContainer>

      {!tableData && (
        <ColumnFlex mt='10' gap='1' align='center'>
          <Text textStyle='title' color={DEFAULT_STYLES.darkGray}>
            You don’t have any payments pending
          </Text>

          <Link href={DashRoutes.draw}>
            <Button variant='text'>Launch a new draw</Button>
          </Link>
        </ColumnFlex>
      )}
    </GridItem>
  );
};
