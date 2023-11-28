import type { ReactElement } from "react";
import type { NextPageWithLayout } from "@client/pages/_app";
import { AuthErrorView } from "@client/views/auth-error";
import { PublicLayout } from "@client/shared/components/layout";

const Page: NextPageWithLayout = () => <AuthErrorView />;

Page.getLayout = function getLayout(page: ReactElement) {
  return <PublicLayout>{page}</PublicLayout>;
};
   
  export default Page;