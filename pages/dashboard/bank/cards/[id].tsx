import { SharedCardContainer } from '@/components';
import { DashBoardLayout } from '@/layout';
import { cardExamples } from '@/store';
import { DEFAULT_STYLES } from '@/styles';
import { Button, Flex, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';

const CardDetails = () => {
  const router = useRouter();
  const card = cardExamples.find((e) => e.id === router.query.id);

  const topbar = (
    <Text textStyle='title' color={DEFAULT_STYLES.lightPurple}>
      Card Details:{' '}
      <span
        style={{
          color: DEFAULT_STYLES.darkGray,
        }}
      >
        {card?.name}
      </span>{' '}
    </Text>
  );

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
      <SharedCardContainer renderItems='' tableSection='' />
    </DashBoardLayout>
  );
};

export default CardDetails;
