import { Flex, Box, Center } from '@chakra-ui/react';
import { useColor } from './useColor';

interface Props {
  showRightBar: boolean;
  showLeftBar: boolean;
  isActive: boolean;
}

export const ProgressTab = ({ showLeftBar, isActive, showRightBar }: Props) => {
  const { color } = useColor();

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
