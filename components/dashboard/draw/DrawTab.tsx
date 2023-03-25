import { DEFAULT_STYLES } from '@/styles';
import { DashRoutes } from '@/utils';
import { Flex, Box, Center } from '@chakra-ui/react';
import { useRouter } from 'next/router';

interface Props {
  showRightBar: boolean;
  showLeftBar: boolean;
  isActive: boolean;
}

export const DrawTab = ({ showLeftBar, isActive, showRightBar }: Props) => {
  const router = useRouter();

  const isExpense = router.pathname === DashRoutes.expense;

  const color = isExpense ? DEFAULT_STYLES.pink : DEFAULT_STYLES.lightPurple;

  return (
    <Flex align='center'>
      {showLeftBar && (
        <Box
          w='19px'
          h='3px'
          transition='all 0.3s ease'
          bg={isActive ? color : '#DBD7F4'}
        />
      )}

      <Center
        borderRadius='full'
        w='24px'
        h='24px'
        border={`3px solid ${color}`}
      >
        <Center
          w='14px'
          h='14px'
          bg={color}
          borderRadius='full'
          transition='all 0.3s ease'
          transform={isActive ? 'scale(1)' : 'scale(0)'}
        />
      </Center>
      {showRightBar && <Box w='39px' h='3px' bg={color} />}
    </Flex>
  );
};
