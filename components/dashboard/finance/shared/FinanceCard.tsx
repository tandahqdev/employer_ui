import Image, { StaticImageData } from 'next/image';
import { ColumnFlex } from '@/components';
import { IProps } from '@/models';
import { DEFAULT_STYLES } from '@/styles';
import { Center, Flex, Icon, Text } from '@chakra-ui/react';
import { RiErrorWarningLine } from 'react-icons/ri';

interface Props extends IProps {
  icon: StaticImageData;
}

export const FinanceCard = ({ title, desc, icon }: Props) => {
  return (
    <ColumnFlex gap='12px' flex='1'>
      <Flex align='center' color={DEFAULT_STYLES.primaryColor} gap='3'>
        <Center w='31px' h='31px' bg='#F0EAFD' rounded='full' pr='1'>
          <Image src={icon} alt={title} />
        </Center>

        <Flex align='center' gap='0.5'>
          <Text fontSize='1rem' fontWeight={DEFAULT_STYLES.bold}>
            {title}
          </Text>
          <Icon as={RiErrorWarningLine} color='#A3A7B7' />
        </Flex>
      </Flex>

      <Text
        textStyle='title'
        color={DEFAULT_STYLES.lightPurple}
        fontSize='0.9rem'
      >
        {desc}
      </Text>
    </ColumnFlex>
  );
};
