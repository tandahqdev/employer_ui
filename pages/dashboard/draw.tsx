import {
  DrawCard,
  DrawTable,
  Header,
  SelectExpenses,
  SharedExpensesAndDraw,
} from '@/components';

const DashboardDraw = () => {
  const topbar = (
    <Header fontSize={{ base: '1.1rem', md: '1.5rem' }}>New draw set up</Header>
  );

  const isDraw = false;
  const isSelected = true;

  return (
    <>
      {isDraw && (
        <SharedExpensesAndDraw header={topbar} showBckBtn>
          <DrawTable />
          <DrawCard />
        </SharedExpensesAndDraw>
      )}

      {isSelected && <SelectExpenses />}
    </>
  );
};

export default DashboardDraw;
