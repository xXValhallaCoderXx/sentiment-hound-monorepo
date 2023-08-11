import type { ReactElement } from "react";
import type { NextPageWithLayout } from "@client/pages/_app";
import DashboardTemplate from "@client/shared/components/templates/DashboardTemplate";
import { ContentPageView } from "@client/views/Content";

const Page: NextPageWithLayout = () => <ContentPageView />;

Page.getLayout = function getLayout(page: ReactElement) {
  return <DashboardTemplate>{page}</DashboardTemplate>;
};

export default Page;
