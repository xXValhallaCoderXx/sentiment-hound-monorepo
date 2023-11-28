import type { ReactElement } from "react";
import type { NextPageWithLayout } from "@client/pages/_app";
import { AuthNewUserView } from "@client/views/auth-new-user";
import { PublicLayout } from "@client/shared/components/layout";

const Page: NextPageWithLayout = () => <AuthNewUserView />;

Page.getLayout = function getLayout(page: ReactElement) {
  return <PublicLayout>{page}</PublicLayout>;
};
   
  export default Page;