import Head from 'next/head';
import { LayoutProps } from '@/models';
import { DEFAULT_STYLES } from '@/styles/globalStyles';

export const GlobalLayout = ({ children }: LayoutProps) => {
  return (
    <>
      <Head>
        {/* Add later */}
        {/* <link rel='icon' href='../favicon.ico' /> */}
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='theme-color' content='#000000' />
        <meta name='description' content='Add later.' />
        <meta name='keywords' content='HR' />
        <meta name='author' content='Chigbo Ifeanyi James' />
        <meta name='apple-mobile-web-app-capable' content='yes' />
        <meta name='apple-mobile-web-app-status-bar-style' content='black' />
        <meta name='apple-mobile-web-app-title' content='waiting list' />

        {/* Add later */}
        <link rel='manifest' href='manifest.json' />
        <link rel='apple-touch-icon' href='favicon.ico' />

        <title>Tanda</title>
      </Head>

      <div
        style={{
          width: DEFAULT_STYLES.fullWidth,
          minHeight: DEFAULT_STYLES.fullHeight,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {children}
      </div>
    </>
  );
};

