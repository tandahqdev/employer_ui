import withdraw from '@/assets/images/withdraw.png';
import fund from '@/assets/images/fund.png';
import hide from '@/assets/images/hide.png';
import freeze from '@/assets/images/freeze.png';
import {
  Card,
  CardActionBtn,
  CardDetails,
  CardListDetails,
  ColumnFlex,
  SharedCardContainer,
} from '@/components';
import { DashBoardLayout } from '@/layout';
import { CardType } from '@/models';
import { cardExamples } from '@/store';
import { DEFAULT_STYLES } from '@/styles';
import { hidePin } from '@/utils';
import { Button, Flex, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';

const Details = () => {
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

  const renderItems = (
    <>
      {card && (
        <>
          <ColumnFlex gap='5'>
            <Card data={card} showBalance />
            <Flex w='full' layerStyle='flex' justify='space-between'>
              <CardActionBtn icon={withdraw} text='Withdraw' />
              <CardActionBtn icon={fund} text='Fund Card' />
              <CardActionBtn icon={hide} text='Hide Details' />
              <CardActionBtn icon={freeze} text='Freeze Card' />
            </Flex>
          </ColumnFlex>

          <CardDetails header='Card'>
            <CardListDetails title='Card name' desc={card.name} addBorderTop />
            <CardListDetails title='Brand' desc={card.brand} />
            <CardListDetails title='Expiry Date' desc={card.expDate} />
            <CardListDetails title='CVV' desc={hidePin(card.cvc, 0)} />
          </CardDetails>

          {card.type === CardType.Physical && (
            <CardDetails header='Billing'>
              <CardListDetails
                title='Street'
                desc={card?.street}
                addBorderTop
              />
              <CardListDetails title='City' desc={card?.city} />
              <CardListDetails title='Postal Code' desc={card?.postalCode} />
              <CardListDetails title='State' desc={card.state} />
              <CardListDetails title='Country' desc={card.country} />
            </CardDetails>
          )}
        </>
      )}
    </>
  );

  return (
    <DashBoardLayout header={topbar} otherBtn={otherBtn}>
      <SharedCardContainer renderItems={renderItems} tableSection='' />
    </DashBoardLayout>
  );
};

export default Details;
