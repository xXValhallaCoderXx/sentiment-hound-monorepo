import type { ReactElement } from "react";
import { getProviders } from "next-auth/react";
import type { NextPageWithLayout } from "@client/pages/_app";
import { SignInPageView } from "@client/views/sign-in";
import { PublicLayout } from "@client/shared/components/layout";

const Page: NextPageWithLayout = ({ providers, ...rest }: any) => (
  <SignInPageView providers={providers} {...rest} />
);

export async function getServerSideProps() {
  return {
    props: {
      providers: await getProviders(),
    },
  };
}

Page.getLayout = function getLayout(page: ReactElement) {
  return <PublicLayout>{page}</PublicLayout>;
};

export default Page;
