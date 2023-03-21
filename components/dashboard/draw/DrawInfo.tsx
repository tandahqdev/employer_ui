import { DEFAULT_STYLES } from '@/styles';
import { Flex, Icon } from '@chakra-ui/react';
import { ReactNode } from 'react';
import { AiFillInfoCircle } from 'react-icons/ai';
import { MdWarning } from 'react-icons/md';

interface Props {
  isInfo?: boolean;
  text: ReactNode;
}

export const DrawInfo = ({ isInfo, text }: Props) => {
  return (
    <Flex
      w={DEFAULT_STYLES.fullWidth}
      align='center'
      minH='72px'
      bg={isInfo ? DEFAULT_STYLES.lightPurpleBg : DEFAULT_STYLES.lightErrorBg}
      borderRadius='6px'
      padding='12px 18px'
      gap='3'
    >
      <Icon
        as={isInfo ? AiFillInfoCircle : MdWarning}
        fontSize='1.3rem'
        color={isInfo ? DEFAULT_STYLES.lightPurple : DEFAULT_STYLES.errorColor}
      />

      {text}
    </Flex>
  );
};
