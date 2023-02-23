import { selectAnatomy } from '@chakra-ui/anatomy';
import {
  ComponentMultiStyleConfig,
  createMultiStyleConfigHelpers,
  defineStyle,
} from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(selectAnatomy.keys);

const tanda2 = definePartsStyle({
  field: {
    border: '1px solid',
    borderColor: 'rgba(25, 34, 76, 0.03);',
    background: 'rgba(25, 34, 76, 0.02)',
    borderRadius: '8px',
  },
});

const tandaXl = defineStyle({
  fontSize: '1rem',
  px: '4',
  h: '56px',
});

const sizes = {
  xl: definePartsStyle({ field: tandaXl, addon: tandaXl }),
};

export const selectTheme: ComponentMultiStyleConfig = defineMultiStyleConfig({
  sizes,
  variants: { tanda2 },
  defaultProps: {
    size: 'xl',
  },
});
