import { DEFAULT_STYLES } from '@/styles';
import { Flex, Box, Center } from '@chakra-ui/react';

interface Props {
  showRightBar: boolean;
  showLeftBar: boolean;
  isActive: boolean;
}

export const DrawTab = ({ showLeftBar, isActive, showRightBar }: Props) => {
  return (
    <Flex align='center'>
      {showLeftBar && (
        <Box
          w='19px'
          h='3px'
          transition='all 0.3s ease'
          bg={isActive ? DEFAULT_STYLES.lightPurple : '#DBD7F4'}
        />
      )}

      <Center
        borderRadius='full'
        w='24px'
        h='24px'
        border={`3px solid ${DEFAULT_STYLES.lightPurple}`}
      >
        <Center
          w='14px'
          h='14px'
          bg={DEFAULT_STYLES.lightPurple}
          borderRadius='full'
          transition='all 0.3s ease'
          transform={isActive ? 'scale(1)' : 'scale(0)'}
        />
      </Center>
      {showRightBar && <Box w='39px' h='3px' bg={DEFAULT_STYLES.lightPurple} />}
    </Flex>
  );
};
