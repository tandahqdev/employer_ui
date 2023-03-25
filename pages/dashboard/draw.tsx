import {
  DrawCard,
  DrawTable,
  Header,
  SharedExpensesAndDraw,
} from '@/components';

const DashboardDraw = () => {
  const topbar = (
    <Header fontSize={{ base: '1.1rem', md: '1.5rem' }}>New draw set up</Header>
  );

  return (
    <SharedExpensesAndDraw header={topbar} showBckBtn>
      <DrawTable />
      <DrawCard />
    </SharedExpensesAndDraw>
  );
};

export default DashboardDraw;
