import { CardPage, Header } from '@/components';
import { DashBoardLayout } from '@/layout';
import { Button, Flex } from '@chakra-ui/react';

const CardDetails = () => {
  const topbar = <Header>Cards</Header>;

  const otherBtn = (
    <Flex layerStyle='flex' gap='4' display={{ base: 'none', md: 'flex' }}>
      <Button size='smPadding' variant='lightPurple'>
        Block card
      </Button>

      <Button size='smPadding' variant='lightPurple'>
        Set new pin
      </Button>
    </Flex>
  );

  return (
    <DashBoardLayout header={topbar} otherBtn={otherBtn}>
      {<CardPage />}
    </DashBoardLayout>
  );
};

export default CardDetails;
