import Link from 'next/link';
import { ColumnFlex } from '@/components';
import { accountsNav } from '@/store';
import { DEFAULT_STYLES } from '@/styles';
import { Box, Flex, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';

export const AcctNav = () => {
  const { pathname } = useRouter();

  const renderNavs = accountsNav.map((account) => {
    const isActive = account.path === pathname;

    return (
      <Link key={account.id} href={account.path}>
        <ColumnFlex minW='80px'>
          <Text color={isActive ? DEFAULT_STYLES.lightPurple : '#757575'}>
            {account.name}
          </Text>

          {isActive && (
            <Box w='full' border={`2px solid ${DEFAULT_STYLES.lightPurple}`} />
          )}
        </ColumnFlex>
      </Link>
    );
  });

  return (
    <Flex align='center' gap='7' p='20px'>
      {renderNavs}
    </Flex>
  );
};
