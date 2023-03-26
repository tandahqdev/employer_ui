import Image from 'next/image';
import bulk from '@/assets/images/bulk.png';
import { AccountPageContainer, Header } from '@/components';
import { DEFAULT_STYLES } from '@/styles';
import { Button, Flex } from '@chakra-ui/react';
import { HiArrowRight } from 'react-icons/hi';
import { RxArrowTopRight } from 'react-icons/rx';

const BankStatements = () => {
  const topbar = (
    <Header
      fontSize={{ base: '1.1rem', md: '1.5rem' }}
      fontWeight={DEFAULT_STYLES.semibold}
    >
      Business checking
    </Header>
  );

  const otherBtn = (
    <Flex align='center' gap='4'>
      <Button size='smPadding' leftIcon={<HiArrowRight />}>
        Move
      </Button>

      <Button size='smPadding' leftIcon={<RxArrowTopRight />}>
        Send
      </Button>

      <Button
        size='smPadding'
        leftIcon={<Image src={bulk} alt='bulk payment' />}
      >
        Bulk payment
      </Button>
    </Flex>
  );

  return (
    <AccountPageContainer
      header={topbar}
      showBckBtn
      otherBtn={otherBtn}
    ></AccountPageContainer>
  );
};

export default BankStatements;
