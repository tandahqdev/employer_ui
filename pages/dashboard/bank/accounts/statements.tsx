import { AccountPageContainer, Header } from '@/components';

const BankStatements = () => {
  const topbar = <Header>Statements</Header>;

  return <AccountPageContainer header={topbar}></AccountPageContainer>;
};

export default BankStatements;
