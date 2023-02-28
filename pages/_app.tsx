import type { AppProps } from 'next/app';
import '@/styles/globals.css';
import { Outfit } from '@next/font/google';
import { theme } from '@/styles/theme';
import { ChakraProvider } from '@chakra-ui/react';
import { GlobalLayout } from '@/layout';

const outFit = Outfit({ subsets: ['latin'] });
export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <style jsx global>{`
        html,
        body,
        * {
          font-family: ${outFit.style.fontFamily};
        }
      `}</style>
      <GlobalLayout>
        <Component {...pageProps} />
      </GlobalLayout>
    </ChakraProvider>
  );
}
