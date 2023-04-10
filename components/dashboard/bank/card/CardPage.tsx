import Link from 'next/link';
import { cardExamples, cardPageTableHeaders } from '@/store';
import { DashRoutes } from '@/utils';
import { Card } from './Card';
import { SharedCardContainer } from './SharedCardContainer';
import { SearchIcon } from '@chakra-ui/icons';
import { Flex, Text } from '@chakra-ui/react';
import { TandaTable } from '../../shared';

export const CardPage = () => {
  const renderCardExample = cardExamples.map((item) => {
    return (
      <Link key={item.id} href={DashRoutes.bankCardDetail(item.id)}>
        <Card data={item} />
      </Link>
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

      <TandaTable tableHeaders={cardPageTableHeaders}></TandaTable>
    </>
  );

  return (
    <SharedCardContainer
      renderItems={renderCardExample}
      tableSection={tableSection}
    />
  );
};
