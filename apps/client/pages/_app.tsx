import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";
import { Provider } from "react-redux";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import { wrapper } from "@client/shared/lib/store";
// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  primary: {
    50: "#fef2f2",
    100: "#ffe1e1",
    200: "#ffc9c9",
    300: "#fea3a3",
    400: "#fb6e6e",
    500: "#f34040",
    600: "#e33737",
    700: "#bc1919",
    800: "#9c1818",
    900: "#811b1b",
    950: "#460909",
  },
  secondary: {
    50: "#f7f7f7",
    100: "#e3e3e3",
    200: "#c8c8c8",
    300: "#a4a4a4",
    400: "#818181",
    500: "#666666",
    600: "#515151",
    700: "#434343",
    800: "#383838",
    900: "#292929",
    950: "#1a1a1a",
  },
  danger: {
    50: "#fef5f2",
    100: "#fee8e2",
    200: "#ffd4c9",
    300: "#fdb7a4",
    400: "#fa896b",
    500: "#f26641",
    600: "#df4a23",
    700: "#bb3c1a",
    800: "#9b3419",
    900: "#81301b",
    950: "#461609",
  },
  black: {
    50: "#F9FAFB",
    100: "#F4F5F7",
    200: "#E5E7EB",
    300: "#D2D6DC",
    400: "#9FA6B2",
    500: "#111112",
    600: "#475569",
    700: "#334155",
    800: "#1E293B",
    900: "#0F172A",
  },
  warning: {
    50: "#fff9eb",
    100: "#ffefc6",
    200: "#ffdd88",
    300: "#ffc64a",
    400: "#ffae1f",
    500: "#f98b07",
    600: "#dd6502",
    700: "#b74406",
    800: "#94340c",
    900: "#7a2b0d",
    950: "#461402",
  },
  info: {
    50: "#eef5ff",
    100: "#dae9ff",
    200: "#bdd9ff",
    300: "#90c2ff",
    400: "#539bff",
    500: "#357bfc",
    600: "#1f5bf1",
    700: "#1745de",
    800: "#1939b4",
    900: "#1a358e",
    950: "#152256",
  },
  success: {
    50: "#eefffa",
    100: "#c6fff2",
    200: "#8cffe6",
    300: "#4bfdd7",
    400: "#13deb9",
    500: "#00cfac",
    600: "#00a78e",
    700: "#018473",
    800: "#06695c",
    900: "#0b564d",
    950: "#003531",
  },
  gray: {
    50: "#f6f7f9",
    100: "#eceef2",
    200: "#d5dae2",
    300: "#b0bac9",
    400: "#8594ab",
    500: "#667891",
    600: "#5a6a85",
    700: "#424e62",
    800: "#3a4352",
    900: "#333a47",
    950: "#22262f",
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
        {getLayout(<Component {...pageProps} />)}
      </ChakraProvider>
    </Provider>
  );
}
