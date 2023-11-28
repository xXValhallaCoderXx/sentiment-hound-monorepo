import type { ReactElement } from "react";
import type { NextPageWithLayout } from "@client/pages/_app";
import { DashboardPageView } from "@client/views/dashboard";
import { AuthenticatedLayout } from "@client/shared/components/layout";

const Page: NextPageWithLayout = () => <DashboardPageView />;

Page.getLayout = function getLayout(page: ReactElement) {
  return <AuthenticatedLayout>{page}</AuthenticatedLayout>;
};
   
  export default Page;