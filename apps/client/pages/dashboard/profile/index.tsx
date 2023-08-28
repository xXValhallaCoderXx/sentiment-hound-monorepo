import type { ReactElement } from "react";
import type { NextPageWithLayout } from "@client/pages/_app";
import DashboardTemplate from "@client/shared/components/templates/DashboardTemplate";
import { ProfileView } from "@client/views/Profile";

const Page: NextPageWithLayout = () => <ProfileView />;

Page.getLayout = function getLayout(page: ReactElement) {
  return <DashboardTemplate>{page}</DashboardTemplate>;
};

export default Page;
