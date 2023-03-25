import { checkboxAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';
import { DEFAULT_STYLES } from '../globalStyles';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(checkboxAnatomy.keys);

const pinkvariant = definePartsStyle({
  control: {
    borderColor: DEFAULT_STYLES.pink,
    _checked: {
      bg: DEFAULT_STYLES.pink,
      color: DEFAULT_STYLES.white,
      borderColor: DEFAULT_STYLES.pink,
      _hover: {
        bg: DEFAULT_STYLES.pink,
        color: DEFAULT_STYLES.white,
        borderColor: DEFAULT_STYLES.pink,
      },
    },
  },
});

const baseStyle = definePartsStyle({
  control: {
    borderColor: DEFAULT_STYLES.lightPurple,
    _checked: {
      bg: DEFAULT_STYLES.lightPurple,
      color: DEFAULT_STYLES.white,
      _hover: {
        bg: DEFAULT_STYLES.lightPurple,
        color: DEFAULT_STYLES.white,
      },
    },
  },
});

export const checkboxTheme = defineMultiStyleConfig({
  baseStyle,
  variants: {
    pinkvariant,
  },
});
