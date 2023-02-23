import type { AppProps } from 'next/app';
import '@/styles/globals.css';
import { Outfit } from '@next/font/google';
import { theme } from '@/styles/theme';
import { ChakraProvider } from '@chakra-ui/react';
import { GlobalLayout } from '@/layout';
import { SpinnerContextProvider } from '@/context';
import { TandaSpinnerModal } from '@/components';

const outFit = Outfit({ subsets: ['latin'] });
export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <SpinnerContextProvider>
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
        <TandaSpinnerModal />
      </SpinnerContextProvider>
    </ChakraProvider>
  );
}
