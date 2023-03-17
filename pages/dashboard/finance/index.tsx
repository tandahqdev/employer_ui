import { MainPage, NewExistPage } from '@/components';

const FinanceOverview = () => {
  const isMainPage = true;
  const isNewPage = false;

  return (
    <>
      {isNewPage && <NewExistPage />}
      {isMainPage && <MainPage />}
    </>
  );
};

export default FinanceOverview;
