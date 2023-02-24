import { DEFAULT_STYLES } from '@/styles';
import { Flex, Icon, Text } from '@chakra-ui/react';
import { IconType } from 'react-icons/lib';

interface Props {
  icon: IconType;
  title: string;
  path?: string;
}

// Change nav comp in the other dashboard to sometime like this.

export const NavItem = ({ icon, title }: Props) => {
  return (
    <Flex
      w={DEFAULT_STYLES.fullWidth}
      pl={DEFAULT_STYLES.sidePl}
      cursor='pointer'
      borderRadius={DEFAULT_STYLES.borderRadius}
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
        color={DEFAULT_STYLES.darkGray}
        _groupHover={{
          color: DEFAULT_STYLES.lightPurple,
        }}
      />
      <Text
        color={DEFAULT_STYLES.darkGray}
        fontSize='0.75rem'
        _groupHover={{
          color: DEFAULT_STYLES.lightPurple,
        }}
      >
        {title}
      </Text>
    </Flex>
  );
};
