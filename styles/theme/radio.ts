import { radioAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';
import { DEFAULT_STYLES } from '../globalStyles';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(radioAnatomy.keys);

const baseStyle = definePartsStyle({
  control: {
    borderRadius: 'full',
    borderColor: DEFAULT_STYLES.lightPurple,
    _checked: {
      bg: DEFAULT_STYLES.white,
      color: DEFAULT_STYLES.lightPurple,
      borderColor: DEFAULT_STYLES.lightPurple,
      _hover: {
        bg: DEFAULT_STYLES.white,
        color: DEFAULT_STYLES.lightPurple,
        borderColor: DEFAULT_STYLES.lightPurple,
      },
    },
  },
});

export const radioTheme = defineMultiStyleConfig({
  baseStyle,
});
