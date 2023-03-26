import { AccountPageContainer, Header } from '@/components';
import { Flex, Button } from '@chakra-ui/react';
import { HiArrowRight } from 'react-icons/hi';
import { RiAddLine } from 'react-icons/ri';

const BankAccounts = () => {
  const topbar = <Header>Accounts</Header>;

  const otherBtn = (
    <Flex align='center' gap='4'>
      <Button
        size='smPadding'
        variant='noBgPurpleBtn'
        leftIcon={<HiArrowRight />}
      >
        Move Money
      </Button>

      <Button size='smPadding' leftIcon={<RiAddLine />}>
        Add Money
      </Button>
    </Flex>
  );

  return (
    <AccountPageContainer
      header={topbar}
      otherBtn={otherBtn}
    ></AccountPageContainer>
  );
};

export default BankAccounts;
