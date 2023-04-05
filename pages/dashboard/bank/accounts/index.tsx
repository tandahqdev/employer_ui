import { AccountCard, AccountPageContainer, Header } from '@/components';
import { accountItems } from '@/store';
import { DEFAULT_STYLES } from '@/styles';
import { Flex, Button, Grid, Center } from '@chakra-ui/react';
import { HiArrowRight } from 'react-icons/hi';
import { RiAddLine } from 'react-icons/ri';

const BankAccounts = () => {
  const topbar = <Header>Accounts</Header>;

  const otherBtn = (
    <Flex align='center' gap='4' display={{ base: 'none', md: 'flex' }}>
      <Button size='smPadding' variant='noBgPurple' leftIcon={<HiArrowRight />}>
        Move Money
      </Button>

      <Button size='smPadding' leftIcon={<RiAddLine />}>
        Add Money
      </Button>
    </Flex>
  );

  const renderActions = accountItems.map((item) => {
    return <AccountCard {...item} key={item.id} />;
  });

  return (
    <AccountPageContainer header={topbar} otherBtn={otherBtn}>
      <Grid
        templateColumns={{
          base: '1fr 1fr',
          md: 'repeat(4,1fr)',
          xl: 'repeat(5,1fr)',
        }}
        padding={{ base: '20px 0', md: '5' }}
        gridAutoRows='1fr'
        w={{ base: 'full', lg: 'max-content' }}
        gap='4'
      >
        <>{renderActions}</>

        <Center
          w={{ base: 'full', md: 'auto', lg: '183px' }}
          minH={{ base: '281px', md: '181px' }}
          border={DEFAULT_STYLES.border}
          borderRadius='10px'
        >
          <Button variant='noBgPurple' size='smPadding'>
            Add Account
          </Button>
        </Center>
      </Grid>
    </AccountPageContainer>
  );
};

export default BankAccounts;
