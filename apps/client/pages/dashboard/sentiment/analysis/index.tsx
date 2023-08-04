import type { ReactElement } from "react";
import type { NextPageWithLayout } from "@client/pages/_app";
import DashboardTemplate from "@client/shared/components/templates/DashboardTemplate";
import { AnalysisView } from "@client/views/Analysis";

const Page: NextPageWithLayout = () => <AnalysisView />;

Page.getLayout = function getLayout(page: ReactElement) {
  return <DashboardTemplate>{page}</DashboardTemplate>;
};

export default Page;
