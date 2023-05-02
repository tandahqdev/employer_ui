import { AlertStatus } from 'models';
import { DEFAULT_STYLES } from 'styles';
import { alertStatusHandler } from 'utils';
import { Flex, Icon, Text } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface Props {
  text: ReactNode;
  type: AlertStatus;
}

export const InfoAlert = ({ text, type }: Props) => {
  const { bg, color, icon } = alertStatusHandler(type);

  return (
    <Flex
      w={DEFAULT_STYLES.fullWidth}
      layerStyle='flex'
      minH='47px'
      borderRadius='6px'
      padding='12px 18px'
      gap='3'
      bg={bg}
    >
      <Icon fontSize='1.3rem' as={icon} color={color} />

      <Text textStyle='desc' color={DEFAULT_STYLES.darkGray}>
        {text}
      </Text>
    </Flex>
  );
};
