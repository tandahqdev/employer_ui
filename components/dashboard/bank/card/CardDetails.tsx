import { ColumnFlex } from 'components';
import { IProps, LayoutProps } from 'models';
import { DEFAULT_STYLES } from 'styles';
import { Center, Flex, Text } from '@chakra-ui/react';
import Image, { StaticImageData } from 'next/image';

interface Props extends LayoutProps {
  header: string;
}

export const CardDetails = ({ children, header }: Props) => {
  return (
    <ColumnFlex
      minH='230px'
      maxH='230px'
      p='10px 20px'
      borderRadius={DEFAULT_STYLES.borderRadius}
      bg={DEFAULT_STYLES.white}
      border={DEFAULT_STYLES.border}
    >
      <Text textStyle='subtitle' pb='1.5'>
        {header} details
      </Text>

      {children}
    </ColumnFlex>
  );
};

interface ListDetailsprops extends IProps {
  addBorderTop?: boolean;
}

export const CardListDetails = ({
  desc,
  title,
  addBorderTop,
}: ListDetailsprops) => {
  return (
    <Flex
      layerStyle='flex'
      justify='space-between'
      w='full'
      borderTop={addBorderTop ? DEFAULT_STYLES.border : 'none'}
      borderBottom={DEFAULT_STYLES.border}
      py='2'
      textStyle='bodyText'
    >
      <Text>{title}</Text>
      <Text textTransform='capitalize'>{desc}</Text>
    </Flex>
  );
};

interface CardActionBtnProps {
  icon: StaticImageData;
  onClick?: () => void;
  text: string;
}

export const CardActionBtn = ({ icon, text, onClick }: CardActionBtnProps) => {
  return (
    <ColumnFlex onClick={onClick} layerStyle='flex' cursor='pointer' gap='1'>
      <Center bg='#FAFAFA' w='36px' h='36px' rounded='full'>
        <Image src={icon} alt={text} />
      </Center>

      <Text textStyle='desc'>{text}</Text>
    </ColumnFlex>
  );
};
