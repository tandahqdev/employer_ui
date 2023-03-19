import { MainPage, NewExistPage, SecondMainPage } from '@/components';

const FinanceOverview = () => {
  const isNewPage = false;
  const isMainPage = false;
  const isSecondPage = true;

  return (
    <>
      {isNewPage && <NewExistPage />}
      {isMainPage && <MainPage />}
      {isSecondPage && <SecondMainPage />}
    </>
  );
};

export default FinanceOverview;
