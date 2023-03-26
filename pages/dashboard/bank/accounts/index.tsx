import { AccountPageContainer, Header } from '@/components';

const BankAccounts = () => {
  const topbar = <Header>Accounts</Header>;

  return <AccountPageContainer header={topbar}></AccountPageContainer>;
};

export default BankAccounts;
