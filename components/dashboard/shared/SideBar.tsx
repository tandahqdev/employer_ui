import { DEFAULT_STYLES } from '@/styles';
import { Flex } from '@chakra-ui/react';

export const SideBar = () => {
  return (
    <Flex
      direction='column'
      w='200px'
      h={DEFAULT_STYLES.fullHeight}
      position='fixed'
      bg={DEFAULT_STYLES.white}
      shadow='0px 1px 12px rgba(195, 203, 222, 0.58806)'
      zIndex={10}
    >
      SideBar
    </Flex>
  );
};
