import { ColumnFlex, Desc } from '@/components';
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
        direction={{ base: 'column', md: 'column' }}
        align='flex-start'
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

        {info && <Desc flex='1'>{info}</Desc>}
      </ColumnFlex>

      {extra}
    </Flex>
  );
};
