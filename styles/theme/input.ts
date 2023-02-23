import { inputAnatomy } from '@chakra-ui/anatomy';
import {
  ComponentMultiStyleConfig,
  createMultiStyleConfigHelpers,
  defineStyle,
} from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(inputAnatomy.keys);

// Variants
const tanda = definePartsStyle({
  field: {
    border: '1px solid',
    borderColor: 'gray.200',
    background: 'white',
    borderRadius: '8px',
  },
});

const tanda2 = definePartsStyle({
  field: {
    border: '1px solid',
    borderColor: 'rgba(25, 34, 76, 0.03);',
    background: 'rgba(25, 34, 76, 0.02)',
    borderRadius: '8px',
  },
});

// How to define sizes
const tandaXl = defineStyle({
  px: '4',
  h: '56px',
});

const sizes = {
  xl: definePartsStyle({ field: tandaXl, addon: tandaXl }),
};

export const inputTheme: ComponentMultiStyleConfig = defineMultiStyleConfig({
  variants: { tanda, tanda2 },
  sizes,
  defaultProps: {
    size: 'xl',
  },
});

