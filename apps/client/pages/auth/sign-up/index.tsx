import type { ReactElement } from "react";
import type { NextPageWithLayout } from "@client/pages/_app";
import { SignInPageView } from "@client/views/sign-in";
import { PublicLayout } from "@client/shared/components/layout";

const Page: NextPageWithLayout = () => <SignInPageView />;

Page.getLayout = function getLayout(page: ReactElement) {
  return <PublicLayout>{page}</PublicLayout>;
};
   
  export default Page;