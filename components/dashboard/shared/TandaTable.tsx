import { LayoutProps } from '@/models';
import { DEFAULT_STYLES } from '@/styles';
import {
  Table,
  TableContainer,
  Tbody,
  Text,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';

interface Props extends LayoutProps {
  tableHeaders: string[];
}

export const TandaTable = ({ tableHeaders, children }: Props) => {
  const renderTableHeaders = tableHeaders.map((h, i, arr) => {
    const isNumeric = i === arr.length - 1;

    return (
      <Th
        key={`${h}_${i}`}
        isNumeric={isNumeric}
        color={DEFAULT_STYLES.primaryHeaderColor}
        opacity={0.8}
      >
        <Text>{h}</Text>
      </Th>
    );
  });

  return (
    <TableContainer minW={DEFAULT_STYLES.fullWidth}>
      <Table variant='simple'>
        <Thead>
          <Tr>{renderTableHeaders}</Tr>
        </Thead>

        <Tbody>{children}</Tbody>
      </Table>
    </TableContainer>
  );
};

export const TandaTableRow = ({ children }: LayoutProps) => (
  <Tr textStyle='bolderBody'>{children}</Tr>
);

