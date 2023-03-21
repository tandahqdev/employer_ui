import {
  ComponentSingleStyleConfig,
  defineStyle,
  defineStyleConfig,
} from '@chakra-ui/react';
import { DEFAULT_STYLES } from '../globalStyles';

// Sizes
const lgPadding = defineStyle({
  px: '24px',
  py: '14px',
});

const smPadding = defineStyle({
  px: '14px',
  py: '10px',
});

// Variants
const bgBtn = defineStyle({
  background: DEFAULT_STYLES.lightPurple,
  color: DEFAULT_STYLES.white,
});

const darkBtn = defineStyle({
  background: DEFAULT_STYLES.primaryHeaderColor,
  color: DEFAULT_STYLES.white,
});

const textBtn = defineStyle((_) => ({
  backgroundColor: 'transparent',
  color: DEFAULT_STYLES.lightPurple,
  py: 0,
  px: 0,
}));

const noBgBtn = defineStyle({
  border: '1px solid',
  borderColor: DEFAULT_STYLES.darkGray,
  backgroundColor: 'transparent',
  color: DEFAULT_STYLES.darkGray,
});

export const buttonTheme: ComponentSingleStyleConfig = defineStyleConfig({
  baseStyle: {
    borderRadius: 8,
    fontWeight: DEFAULT_STYLES.semibold,
    fontSize: '0.95rem',
    _active: {
      transform: 'scale(0.99)',
    },
    _hover: {
      opacity: 0.9,
      _disabled: {
        bg: 'gray',
      },
    },
  },

  sizes: { lgPadding, smPadding },

  variants: {
    noBgBtn,
    bgBtn,
    textBtn,
    darkBtn,
  },
  defaultProps: {
    size: 'lgPadding',
    variant: 'bgBtn',
  },
});
