import "@client/shared/styles/globals.css";
import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";
import { Provider } from "react-redux";
import type { AppProps } from "next/app";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import { wrapper } from "@client/shared/lib/store";
// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  primary: "#f34040",
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
};

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export const theme = extendTheme({ colors });

export default function App({ Component, ...rest }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available

  const getLayout = Component.getLayout || ((page) => page);
  const { store, props } = wrapper.useWrappedStore(rest);
  const { pageProps } = props;

  return (
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <UserProvider>{getLayout(<Component {...pageProps} />)} </UserProvider>
      </ChakraProvider>
    </Provider>
  );
}
