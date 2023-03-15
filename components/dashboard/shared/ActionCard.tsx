import Image from 'next/image';
import Link from 'next/link';
import { ColumnFlex } from '@/components';
import { DEFAULT_STYLES } from '@/styles';
import { Box, Button, HStack, Stack, Text } from '@chakra-ui/react';
import { TandaHDivider } from './TandaDivider';
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
  atEdge,
  gradientImg,
  leftIcon,
}: ActionCardModel) => {
  const buttonLink = (
    <Link
      href={path}
      style={{
        alignSelf: isShowTopBtn ? 'center' : 'flex-start',
      }}
    >
      <Button variant='noBgBtn' onClick={onClick} leftIcon={leftIcon}>
        {btnText}
      </Button>
    </Link>
  );

  return (
    <ColumnFlex
      minH='350px'
      rounded={DEFAULT_STYLES.borderRadius}
      bg={DEFAULT_STYLES.white}
      border={DEFAULT_STYLES.border}
      align='center'
      pt='4'
      pb='5'
      position='relative'
      overflow='hidden'
    >
      <HStack width='85%' align='center' justify='space-between' pb='4'>
        <ActionTitle header={header} headerColor={headerColor} icon={icon} />

        {isShowTopBtn && buttonLink}
      </HStack>

      <TandaHDivider />

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

      {gradientImg && (
        <Box
          pos='absolute'
          right={atEdge ? 0 : '5'}
          bottom={atEdge ? 0 : '-5px'}
        >
          <Image src={gradientImg} alt='design' />
        </Box>
      )}
    </ColumnFlex>
  );
};
