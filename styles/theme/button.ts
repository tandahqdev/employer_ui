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


const pinkBtn = defineStyle({
  background: DEFAULT_STYLES.pink,
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


const noBgPurpleBtn = defineStyle({
  border: '1px solid',
  borderColor: DEFAULT_STYLES.lightPurple,
  backgroundColor: 'transparent',
  color: DEFAULT_STYLES.lightPurple,
});

export const buttonTheme: ComponentSingleStyleConfig = defineStyleConfig({
  baseStyle: {
    borderRadius: 8,
    fontWeight: DEFAULT_STYLES.semibold,
    fontSize: '0.95rem',
    _hover: {
      opacity: 0.9,
      _disabled: {
        opacity: 0.9,
        bg: 'gray.300',
      },
    },
  },

  sizes: { lgPadding, smPadding },

  variants: {
    noBgBtn,
    bgBtn,
    textBtn,
    darkBtn,
    pinkBtn,
    noBgPurpleBtn,
  },
  defaultProps: {
    size: 'lgPadding',
    variant: 'bgBtn',
  },
});
