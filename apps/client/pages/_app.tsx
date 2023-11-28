import "@client/styles/globals.css";
import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { ChakraProvider } from "@chakra-ui/react";
import { CacheProvider } from "@chakra-ui/next-js";
import { store } from "@client/shared/root-store";
import { SessionProvider } from "next-auth/react";
import { theme } from "@client/shared/styles/theme";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available

  const getLayout = Component.getLayout || ((page) => page);

  return (
    <CacheProvider>
      <ChakraProvider theme={theme}>
        <SessionProvider session={session}>
          <Provider store={store}>
            {getLayout(<Component {...pageProps} />)}
          </Provider>
        </SessionProvider>
      </ChakraProvider>
    </CacheProvider>
  );
}
