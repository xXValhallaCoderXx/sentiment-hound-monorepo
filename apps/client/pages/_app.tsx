import "@client/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { ChakraProvider } from "@chakra-ui/react";
import { CacheProvider } from "@chakra-ui/next-js";
import { store } from "@client/shared/root-store";
import { SessionProvider } from "next-auth/react";
import {theme} from "@client/shared/styles/theme";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <CacheProvider>
      <ChakraProvider theme={theme}>
        <SessionProvider session={session}>
          <Provider store={store}>
            <Component {...pageProps} />
          </Provider>
        </SessionProvider>
      </ChakraProvider>
    </CacheProvider>
  );
}
