import type { ReactElement } from "react";
import type { NextPageWithLayout } from "@client/pages/_app";
import { SignUpView } from "@client/views/sign-up";
import { PublicLayout } from "@client/shared/components/layout";

const Page: NextPageWithLayout = () => <SignUpView />;

Page.getLayout = function getLayout(page: ReactElement) {
  return <PublicLayout>{page}</PublicLayout>;
};
   
  export default Page;