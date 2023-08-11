import type { ReactElement } from "react";
import type { NextPageWithLayout } from "@client/pages/_app";
import DashboardTemplate from "@client/shared/components/templates/DashboardTemplate";
import { ContentDetailView } from "@client/views/ContentDetail";

const Page: NextPageWithLayout = () => <ContentDetailView />;

Page.getLayout = function getLayout(page: ReactElement) {
  return <DashboardTemplate>{page}</DashboardTemplate>;
};

export default Page;
