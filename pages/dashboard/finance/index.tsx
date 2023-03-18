import { MainPage, NewExistPage } from '@/components';

const FinanceOverview = () => {
  const isNewPage = false;
  const isMainPage = true;

  return (
    <>
      {isNewPage && <NewExistPage />}
      {isMainPage && <MainPage />}
    </>
  );
};

export default FinanceOverview;
