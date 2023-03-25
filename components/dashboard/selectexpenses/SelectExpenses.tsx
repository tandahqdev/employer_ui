import { DrawCard } from '../draw';
import { ProfileNavCard, SharedExpensesAndDraw } from '../shared';
import { ExpenseTable } from './ExpenseTable';

export const SelectExpenses = () => {
  const topbar = (
    <ProfileNavCard
      title='Expense finance'
      desc='Please select the transactions you want to finance with us and choose your payment terms'
    />
  );

  return (
    <SharedExpensesAndDraw header={topbar} showBckBtn>
      <ExpenseTable />
      <DrawCard />
    </SharedExpensesAndDraw>
  );
};
