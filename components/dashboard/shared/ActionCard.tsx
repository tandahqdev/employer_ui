import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';
import { ColumnFlex } from '@/components';
import { DEFAULT_STYLES } from '@/styles';
import { Button, Center, Flex, HStack, Stack, Text } from '@chakra-ui/react';
import { TandaDivider } from './TandaDivider';

interface Props {
  header: string;
  headerColor: string;
  icon: StaticImageData;
  title: string;
  desc: string;
  isShowTopBtn?: boolean;
  btnText: string;
  onClick?: () => void;
  path: string;
}

export const ActionCard = ({
  icon,
  header,
  headerColor,
  btnText,
  isShowTopBtn,
  onClick,
  title,
  desc,
  path,
}: Props) => {
  const buttonLink = (
    <Link href={path}>
      <Button
        variant='noBgBtn'
        onClick={onClick}
        alignSelf={isShowTopBtn ? 'center' : 'flex-start'}
      >
        {btnText}
      </Button>
    </Link>
  );

  return (
    <ColumnFlex
      minH='350px'
      rounded={16}
      bg={DEFAULT_STYLES.white}
      border={DEFAULT_STYLES.border}
      align='center'
      pt='4'
      pb='5'
    >
      <HStack width='85%' align='center' justify='space-between' pb='4'>
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

        {isShowTopBtn && buttonLink}
      </HStack>

      <TandaDivider />

      <Stack w='85%' pt='4' flex='1' gap='2'>
        <Text textStyle='title' maxW='60%'>
          {title}
        </Text>

        <Text
          textStyle='bodyText'
          maxW='324px'
          color={DEFAULT_STYLES.primaryColor}
          opacity={0.4}
          flex='1'
        >
          {desc}
        </Text>

        {!isShowTopBtn && buttonLink}
      </Stack>
    </ColumnFlex>
  );
};
