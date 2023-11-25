import type { ReactElement } from "react";
import type { NextPageWithLayout } from "@client/pages/_app";
import PublicTemplate from "@client/shared/components/templates/PublicTemplate";
import { SignUpView as SignUpViewPage } from "@client/views/SignUp";

const Page: NextPageWithLayout = () => <SignUpViewPage />;

Page.getLayout = function getLayout(page: ReactElement) {
  return <PublicTemplate>{page}</PublicTemplate>;
};

export default Page;
