import { ColumnFlex, IconBtn } from '@/components';
import { useCustomMediaQuery } from '@/context';
import { DEFAULT_STYLES } from '@/styles';
import { HamburgerIcon } from '@chakra-ui/icons';
import { Center, Flex, HStack } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface Props {
  header?: ReactNode;
}

export const Topbar = ({ header }: Props) => {
  const { upDateMediaQuery } = useCustomMediaQuery();

  return (
    <Flex
      w={DEFAULT_STYLES.fullWidth}
      h={{ base: '80px', lg: '104px' }}
      position='fixed'
      bg={DEFAULT_STYLES.white}
      borderBottom='1px solid rgba(218, 220, 224, 0.83)'
      align='center'
      justify='center'
      zIndex={5}
      px={DEFAULT_STYLES.mobilePx}
    >
      <HStack
        width={DEFAULT_STYLES.containerWidth}
        align='center'
        justify='space-between'
      >
        <ColumnFlex>{header}</ColumnFlex>

        <Flex w='max-content' gap='4'>
          <Center
            width='54px'
            height='54px'
            bgColor={DEFAULT_STYLES.lightPurple}
            borderRadius='full'
          >
            <Center
              width='16px'
              height='16px'
              bg={DEFAULT_STYLES.lightGray}
              borderRadius='full'
            />
          </Center>

          <IconBtn
            aria-label='Close button'
            icon={<HamburgerIcon fontSize='2rem' />}
            display={{ base: 'flex', xl: 'none' }}
            bgColor='transparent'
            onClick={() => {
              upDateMediaQuery(true);
            }}
          />
        </Flex>
      </HStack>
    </Flex>
  );
};
