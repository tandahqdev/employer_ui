import { CardPage } from '@/components';
import { DashBoardLayout } from '@/layout';
import { DEFAULT_STYLES } from '@/styles';
import { Button, Flex, Text } from '@chakra-ui/react';

const CardDetails = () => {
  const topbar = (
    <Text textStyle='title' color={DEFAULT_STYLES.lightPurple}>
      Card Details:{' '}
      <span
        style={{
          color: DEFAULT_STYLES.darkGray,
        }}
      >
        Sam Smith
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
      <CardPage />
    </DashBoardLayout>
  );
};

export default CardDetails;
