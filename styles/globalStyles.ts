export const DEFAULT_STYLES = {
  containerWidth: {
    base: '100%',
    lg: '95%',
    xl: '1020px',
    '2xl': '1200px',
  },
  fullWidth: '100%',
  fullHeight: '100vh',
  pageWidth: { base: '100%', xl: '984px' },
  white: '#FFFFFF',
  darkColor: '#000000',
  pink: '#EF567E',
  lightPinkBg: 'rgba(239, 86, 126, 0.1)',
  lightDarkColor: '#888888',
  lightPurple: '#6E31F0',
  primaryHeaderColor: '#2B2B2B',
  primaryColor: '#19224C',
  lightPrimaryColor: '#FDE7E3',
  bgColor: '#F6F6F6',
  lightPurpleBg: 'rgba(110, 49, 240, 0.1)',
  lightGrayBg: 'rgba(177, 185, 192, 0.2);',
  grayBg: 'rgba(228, 226, 226, 0.6)',
  errorColor: '#C5292A',
  lightErrorBg: 'rgba(197, 41, 42, 0.1);',
  successColor: '#34A853',
  lightGray: '#D9D9D9',
  darkGray: '#637381',
  borderColor: '#E4E2E2',
  normalFontWeight: 400,
  semibold: 500,
  mediumbold: 600,
  bold: 700,
  smFontSize: '0.75rem',
  fontSize: '0.95rem',
  textFontSize: '0.9rem',
  desc: '0.75rem',
  alt: 'Tanda',
  fontFamily: "'Outfit', sans-serif",
  lineHeight: 1.6,
  borderRadius: 16,
  mobilePx: { base: '2', xl: 0 },
  sidePl: '30px',
  border: `1px solid #E4E2E2`,
  transition: 'all 250ms linear',
};

export const sharedGridStyles = {
  gridTemplateColumns: { base: 'repeat(1,1fr)', md: 'repeat(2,1fr)' },
  w: DEFAULT_STYLES.pageWidth,
  columnGap: { base: '20px', lg: '50px' },
  rowGap: '5',
  px: DEFAULT_STYLES.mobilePx,
  maxW: '1000px',
};

