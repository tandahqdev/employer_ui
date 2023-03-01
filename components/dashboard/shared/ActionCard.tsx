import Link from 'next/link';
import { ColumnFlex } from '@/components';
import { DEFAULT_STYLES } from '@/styles';
import { Button, HStack, Stack, Text } from '@chakra-ui/react';
import { TandaDivider } from './TandaDivider';
import { ActionCardModel } from '@/models';
import { ActionTitle } from './ActionTitle';

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
}: ActionCardModel) => {
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
        <ActionTitle header={header} headerColor={headerColor} icon={icon} />

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
