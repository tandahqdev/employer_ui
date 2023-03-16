import { extendTheme } from '@chakra-ui/react';
import { DEFAULT_STYLES } from '../globalStyles';
import { buttonTheme } from './button';
import { inputTheme } from './input';
import { selectTheme } from './select';
import { spinnerTheme } from './spinner';

export const theme = extendTheme({
  components: {
    Button: buttonTheme,
    Input: inputTheme,
    Spinner: spinnerTheme,
    Select: selectTheme,
  },
  textStyles: {
    label: {
      fontSize: '0.8rem',
      fontWeight: 500,
      lineHeight: 1.5,
      color: DEFAULT_STYLES.primaryHeaderColor,
    },

    bodyText: {
      fontSize: '0.9rem',
      fontWeight: 400,
      lineHeight: 1.4,
      color: DEFAULT_STYLES.primaryColor,
    },
    info: {
      fontSize: '0.7rem',
      lineHeight: 1.5,
      color: DEFAULT_STYLES.primaryColor,
      fontWeight: 400,
    },
    title: {
      fontSize: '1.2rem',
      lineHeight: 1.3,
      color: DEFAULT_STYLES.primaryColor,
      fontWeight: 600,
    },
    desc: {
      fontSize: '0.8rem',
      lineHeight: 1.4,
      color: DEFAULT_STYLES.primaryColor,
      fontWeight: 400,
    },
    header: {
      fontSize: '2rem',
      lineHeight: 1.5,
      color: DEFAULT_STYLES.primaryHeaderColor,
      fontWeight: 600,
    },
  },
  colors: {
    tandaColors: {
      //  Add later
    },
  },
  layerStyles: {
    gridItem: {
      bg: 'white',
      border: '1px solid',
      borderColor: '#E4E2E2',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      borderRadius: 16,
      padding: { base: '10px', md: '30px' },
    },
  },
});
