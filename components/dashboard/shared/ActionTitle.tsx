import Image, { StaticImageData } from 'next/image';
import { DEFAULT_STYLES } from '@/styles';
import { Flex, Center, Text } from '@chakra-ui/react';

interface Props {
  header: string;
  headerColor: string;
  icon: StaticImageData;
}

export const ActionTitle = ({ headerColor, icon, header }: Props) => {
  return (
    <Flex align='center' gap='7px'>
      <Center bgColor={headerColor} borderRadius='full' w='37px' h='37px'>
        <Image src={icon} alt={header} />
      </Center>

      <Text
        fontSize='1.3rem'
        fontWeight={DEFAULT_STYLES.mediumbold}
        textTransform='uppercase'
        letterSpacing='0.13px'
        color={headerColor}
      >
        {header}
      </Text>
    </Flex>
  );
};
