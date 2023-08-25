import type { ReactElement } from "react";
import type { NextPageWithLayout } from "@client/pages/_app";
import PublicTemplate from "@client/shared/components/templates/PublicTemplate";
import { SignInPageView } from "@client/views/SignIn";

const Page: NextPageWithLayout = () => <SignInPageView />;

Page.getLayout = function getLayout(page: ReactElement) {
  return <PublicTemplate>{page}</PublicTemplate>;
};

export default Page;
