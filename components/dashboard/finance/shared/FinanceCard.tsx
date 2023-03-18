import { ColumnFlex } from '@/components';
import { IProps } from '@/models';
import { DEFAULT_STYLES } from '@/styles';
import { Center, Flex, Icon, Text } from '@chakra-ui/react';
import { RiErrorWarningLine } from 'react-icons/ri';
import { IconType } from 'react-icons';
import { useSharedColor } from '@/customHooks';
import { ReactNode } from 'react';

interface Props extends IProps {
  icon: IconType;
  w?: string;
  extra?: ReactNode;
  info?: string;
}

export const FinanceCard = ({ title, desc, icon, w, extra, info }: Props) => {
  const color = useSharedColor();

  return (
    <Flex
      align='flex-end'
      w={{ base: DEFAULT_STYLES.fullWidth, lg: w }}
      justify='space-between'
    >
      <ColumnFlex
        direction={{ base: 'row', md: 'column' }}
        align={{ base: 'center', md: 'flex-start' }}
        justify={{ base: 'space-between', md: 'flex-start' }}
        gap='12px'
      >
        <Flex align='center' color={DEFAULT_STYLES.primaryColor} gap='3'>
          <Center w='31px' h='31px' bg='#F0EAFD' rounded='full'>
            <Icon as={icon} fontSize='1.3rem' color={color} />
          </Center>

          <Flex align='center' gap='1.5'>
            <Text fontSize='1rem' fontWeight={DEFAULT_STYLES.bold}>
              {title}
            </Text>
            <Icon as={RiErrorWarningLine} color='#A3A7B7' />
          </Flex>
        </Flex>

        <Text textStyle='title' color={color} fontSize='0.9rem'>
          {desc}
        </Text>

        {info && (
          <Text
            textStyle='desc'
            color={DEFAULT_STYLES.primaryColor}
            opacity={0.4}
            flex='1'
          >
            {info}
          </Text>
        )}
      </ColumnFlex>

      {extra}
    </Flex>
  );
};
