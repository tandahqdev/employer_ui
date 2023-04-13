import withdraw from '@/assets/images/withdraw.png';
import fund from '@/assets/images/fund.png';
import hide from '@/assets/images/hide.png';
import freeze from '@/assets/images/freeze.png';
import {
  Card,
  CardActionBtn,
  CardDetails,
  CardListDetails,
  CardModal,
  ColumnFlex,
  SharedCardContainer,
  WithdrawFundActions,
} from '@/components';
import { DashBoardLayout } from '@/layout';
import { CardType } from '@/models';
import { cardExamples } from '@/store';
import { DEFAULT_STYLES } from '@/styles';
import { hidePin } from '@/utils';
import { Button, Flex, Text, useDisclosure } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { ReactNode, useState } from 'react';

interface CardModalProps {
  header: string;
  desc?: string;
  data?: ReactNode;
}

const Details = () => {
  const router = useRouter();
  const card = cardExamples.find((e) => e.id === router.query.id);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [cardModal, setCardModal] = useState<CardModalProps>({
    header: '',
    desc: 'Fìll in the transaction details.',
  });

  const updateCardModalHandler = (opts: CardModalProps) => {
    setCardModal(opts);
    onOpen();
  };

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
      <Button
        size='smPadding'
        variant='lightPurple'
        onClick={() => {
          updateCardModalHandler({
            header: 'Block Card',
            desc: 'Select the reason for cancellation',
          });
        }}
      >
        Block card
      </Button>

      <Button
        size='smPadding'
        variant='lightPurple'
        onClick={() => {
          updateCardModalHandler({
            header: 'Change pin',
            desc: 'Enter the current 4 digit pin',
          });
        }}
      >
        Set new pin
      </Button>
    </Flex>
  );

  const renderItems = (
    <>
      {card && (
        <>
          <ColumnFlex gap='3'>
            <Card data={card} showBalance />
            <Flex w='full' layerStyle='flex' justify='space-between'>
              <CardActionBtn
                icon={withdraw}
                text='Withdraw'
                onClick={() => {
                  updateCardModalHandler({
                    header: 'Withdraw from Tanda’s Card',
                    data: <WithdrawFundActions />,
                  });
                }}
              />
              <CardActionBtn
                icon={fund}
                text='Fund Card'
                onClick={() => {
                  updateCardModalHandler({
                    header: 'Fund Tanda’s Card',
                  });
                }}
              />
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
      <CardModal
        isOpen={isOpen}
        onClose={onClose}
        header={cardModal.header}
        label={cardModal.desc}
        data={cardModal.data}
      />
    </DashBoardLayout>
  );
};

export default Details;
