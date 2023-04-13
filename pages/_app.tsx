import type { AppProps } from 'next/app';
import { Outfit } from "next/font/google";
import { theme } from '@/styles';
import { ChakraProvider } from '@chakra-ui/react';
import { GlobalLayout } from '@/layout';
import '@/styles/globals.css';

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
