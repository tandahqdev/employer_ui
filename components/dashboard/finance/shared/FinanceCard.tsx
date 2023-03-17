import { ColumnFlex } from '@/components';
import { IProps } from '@/models';
import { DEFAULT_STYLES } from '@/styles';
import { Center, Flex, Icon, Text } from '@chakra-ui/react';
import { RiErrorWarningLine } from 'react-icons/ri';
import { IconType } from 'react-icons';
import { useSharedColor } from '@/customHooks';

interface Props extends IProps {
  icon: IconType;
}

export const FinanceCard = ({ title, desc, icon }: Props) => {
  const color = useSharedColor();

  return (
    <ColumnFlex
      direction={{ base: 'row', md: 'column' }}
      align={{ base: 'center', md: 'flex-start' }}
      justify={{ base: 'space-between', md: 'flex-start' }}
      gap='12px'
      flex='1'
      w='full'
    >
      <Flex align='center' color={DEFAULT_STYLES.primaryColor} gap='3'>
        <Center w='31px' h='31px' bg='#F0EAFD' rounded='full'>
          <Icon as={icon} fontSize='1.3rem' color={color} />
        </Center>

        <Flex align='center' gap='0.5'>
          <Text fontSize='1rem' fontWeight={DEFAULT_STYLES.bold}>
            {title}
          </Text>
          <Icon as={RiErrorWarningLine} color='#A3A7B7' />
        </Flex>
      </Flex>

      <Text textStyle='title' color={color} fontSize='0.9rem'>
        {desc}
      </Text>
    </ColumnFlex>
  );
};
