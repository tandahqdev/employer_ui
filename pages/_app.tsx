import type { AppProps } from 'next/app';
import { outFit, theme } from 'styles';
import { ChakraProvider } from '@chakra-ui/react';
import { GlobalLayout } from 'layout';
import 'styles/globals.css';

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
