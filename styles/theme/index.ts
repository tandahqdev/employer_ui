import { extendTheme } from '@chakra-ui/react';
import { DEFAULT_STYLES } from '../globalStyles';
import { buttonTheme } from './button';
import { checkboxTheme } from './checkbox';
import { inputTheme } from './input';
import { radioTheme } from './radio';
import { selectTheme } from './select';
import { spinnerTheme } from './spinner';

export const textStyles = {
  label: {
    fontSize: '0.75rem',
    fontWeight: 500,
    lineHeight: 1.5,
    color: DEFAULT_STYLES.primaryHeaderColor,
  },
  bodyText: {
    fontSize: '0.8rem',
    fontWeight: 400,
    lineHeight: 1.5,
    color: DEFAULT_STYLES.primaryColor,
  },
  info: {
    fontSize: '0.7rem',
    lineHeight: 1.8,
    color: DEFAULT_STYLES.primaryColor,
    fontWeight: 400,
  },
  title: {
    fontSize: { base: '1rem', md: '1.2rem' },
    lineHeight: 1.3,
    color: DEFAULT_STYLES.primaryColor,
    fontWeight: 600,
  },
  darkTitle: {
    fontSize: { base: '1rem', md: '1.2rem' },
    lineHeight: 1.3,
    color: DEFAULT_STYLES.primaryHeaderColor,
    fontWeight: 600,
  },
  subtitle: {
    fontSize: '1rem',
    lineHeight: 1.3,
    color: DEFAULT_STYLES.primaryHeaderColor,
    fontWeight: 600,
  },

  smallSubtitle: {
    fontSize: '0.75rem',
    lineHeight: 1.3,
    color: DEFAULT_STYLES.primaryHeaderColor,
    fontWeight: 600,
  },
  desc: {
    fontSize: '0.7rem',
    lineHeight: 1.4,
    color: DEFAULT_STYLES.primaryColor,
    fontWeight: 400,
  },
  header: {
    fontSize: { base: '1.1rem', md: '1.8rem' },
    lineHeight: 1.5,
    color: DEFAULT_STYLES.primaryHeaderColor,
    fontWeight: 600,
  },
  tiny: {
    fontSize: '0.625rem',
    lineHeight: 1.8,
    color: DEFAULT_STYLES.darkGray,
  },
  bolderBody: {
    fontSize: '0.8rem',
    fontWeight: 600,
    lineHeight: 1.4,
    color: DEFAULT_STYLES.darkGray,
  },
  placeholder: {
    fontSize: '0.85rem',
    lineHeight: 1.5,
    color: DEFAULT_STYLES.darkGray,
  },
};

export const theme = extendTheme({
  components: {
    Button: buttonTheme,
    Input: inputTheme,
    Spinner: spinnerTheme,
    Select: selectTheme,
    Radio: radioTheme,
    Checkbox: checkboxTheme,
  },
  textStyles,
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
      padding: { base: '15px', md: '30px' },
    },
    card: {
      border: '1px solid',
      borderColor: '#E4E2E2',
      bg: 'white',
      borderRadius: 16,
    },
  },
});
