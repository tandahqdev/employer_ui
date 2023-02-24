import {
  ComponentSingleStyleConfig,
  defineStyle,
  defineStyleConfig,
} from '@chakra-ui/react';
import { DEFAULT_STYLES } from '../globalStyles';

// Sizes
const lgPadding = defineStyle({
  px: '24px',
  py: '18px',
});

const smPadding = defineStyle({
  px: '16px',
  py: '12px',
});

// Variants
const bgBtn = defineStyle({
  background: 'green',
  color: DEFAULT_STYLES.white,
  boxShadow: '0px 10px 10px rgba(248, 150, 115, 0.2)',
  _hover: {
    _disabled: {
      background: 'green',
    },
  },
});

const textBtn = defineStyle((_) => ({
  backgroundColor: 'transparent',
  color: DEFAULT_STYLES.primaryColor,
}));

const noBgBtn = defineStyle({
  border: '1px solid',
  borderColor: '#637381',
  backgroundColor: 'transparent',
  color: '#637381',
});

export const buttonTheme: ComponentSingleStyleConfig = defineStyleConfig({
  baseStyle: {
    borderRadius: 8,
    fontWeight: DEFAULT_STYLES.semibold,
    fontSize: '0.95rem',
    _active: {
      transform: 'scale(0.98)',
    },
  },

  sizes: { lgPadding, smPadding },

  variants: {
    noBgBtn,
    bgBtn,
    textBtn,
  },
  defaultProps: {
    size: 'lgPadding',
    variant: 'bgBtn',
  },
});
