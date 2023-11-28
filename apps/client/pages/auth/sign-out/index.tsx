import type { ReactElement } from "react";
import type { NextPageWithLayout } from "@client/pages/_app";
import { AuthSignOutView } from "@client/views/auth-sign-out";
import { PublicLayout } from "@client/shared/components/layout";

const Page: NextPageWithLayout = () => <AuthSignOutView />;

Page.getLayout = function getLayout(page: ReactElement) {
  return <PublicLayout>{page}</PublicLayout>;
};
   
  export default Page;