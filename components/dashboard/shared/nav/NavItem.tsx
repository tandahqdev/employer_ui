import Link from 'next/link';
import { DEFAULT_STYLES } from '@/styles';
import { Flex, Icon, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { IconType } from 'react-icons/lib';

interface Props {
  icon: IconType;
  title: string;
  path?: string;
  onClick?: () => void;
}

export const NavItem = ({ icon, title, path, onClick }: Props) => {
  const pathname = useRouter().pathname;
  const isActive = path === pathname;

  const navItem = (
    <Flex
      w={DEFAULT_STYLES.fullWidth}
      pl={DEFAULT_STYLES.sidePl}
      cursor='pointer'
      onClick={onClick}
      borderRadius={DEFAULT_STYLES.borderRadius}
      bg={isActive ? 'rgba(110, 49, 240, 0.1)' : 'transparent'}
      gap='2'
      py='2'
      role='group'
      _hover={{
        bg: 'rgba(110, 49, 240, 0.1)',
      }}
      align='center'
    >
      <Icon
        as={icon}
        color={isActive ? DEFAULT_STYLES.lightPurple : DEFAULT_STYLES.darkGray}
        _groupHover={{
          color: DEFAULT_STYLES.lightPurple,
        }}
      />

      <Text
        color={isActive ? DEFAULT_STYLES.lightPurple : DEFAULT_STYLES.darkGray}
        fontSize={DEFAULT_STYLES.smFontSize}
        _groupHover={{
          color: DEFAULT_STYLES.lightPurple,
        }}
      >
        {title}
      </Text>
    </Flex>
  );

  return <>{path ? <Link href={path}>{navItem}</Link> : navItem}</>;
};
