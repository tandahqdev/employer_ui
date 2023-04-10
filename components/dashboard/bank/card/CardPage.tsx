import Link from 'next/link';
import { cardExamples, cardPageTableHeaders } from '@/store';
import { DashRoutes } from '@/utils';
import { Card } from './Card';
import { SharedCardContainer } from './SharedCardContainer';
import { SearchIcon } from '@chakra-ui/icons';
import { Center, Flex, Td, Text } from '@chakra-ui/react';
import { TandaTable, TandaTableRow } from '../../shared';
import { ColumnFlex } from '@/components';

export const CardPage = () => {
  const renderCardExample = cardExamples.map((item) => {
    return (
      <Link key={item.id} href={DashRoutes.bankCardDetail(item.id)}>
        <Card data={item} />
      </Link>
    );
  });

  const renderTableBody = cardExamples.map((data) => {
    return (
      <TandaTableRow key={data.id}>
        <Td>{data.name}</Td>
        <Td>
          <ColumnFlex>
            <Text>Corporate Acoount</Text>
            <Text>{data.account}</Text>
          </ColumnFlex>
        </Td>

        <Td>
          <Center
            p='1'
            rounded='8px'
            maxW='90px'
            textTransform='capitalize'
            color={data.tableTypeColor.color}
            bg={data.tableTypeColor.bg}
          >
            {data.type}
          </Center>
        </Td>

        <Td>09 / 24</Td>
      </TandaTableRow>
    );
  });

  const tableSection = (
    <>
      <Flex layerStyle='flex' gap='2' cursor='pointer'>
        <SearchIcon />
        <Text textStyle='bolderBody' userSelect='none'>
          Search
        </Text>
      </Flex>

      <TandaTable tableHeaders={cardPageTableHeaders}>
        {renderTableBody}
      </TandaTable>
    </>
  );

  return (
    <SharedCardContainer
      renderItems={renderCardExample}
      tableSection={tableSection}
    />
  );
};
