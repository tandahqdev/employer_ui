import { inputAnatomy } from '@chakra-ui/anatomy';
import {
  ComponentMultiStyleConfig,
  createMultiStyleConfigHelpers,
  defineStyle,
} from '@chakra-ui/react';
import { DEFAULT_STYLES } from '../globalStyles';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(inputAnatomy.keys);


  const baseStyle = definePartsStyle({
    field: {
      _invalid: {
        border: '1px solid',
        borderColor: DEFAULT_STYLES.errorColor,
      },
    },
  });

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

  const tandaXs = definePartsStyle({
    field: {
      border: '2px solid',
      borderColor: '#DEE5E9',
      background: 'transparent',
      borderRadius: '4px',
      transition: 'all 0.3s ease-in-out',
      h: '37px',
      w: '123px',
      _focus: {
        border: '1px solid',
        borderColor: DEFAULT_STYLES.lightPurple,
      },
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
    variants: { tanda, tanda2, tandaXs },
    baseStyle,
    sizes,
    defaultProps: {
      size: 'xl',
    },
  });
