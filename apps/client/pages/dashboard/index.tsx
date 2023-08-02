// import Image from "next/image";
// import { Inter } from "next/font/google";
// import { useUser } from "@auth0/nextjs-auth0/client";
import type { ReactElement } from "react";
import type { NextPageWithLayout } from "@client/pages/_app";
import DashboardTemplate from "@client/shared/components/templates/DashboardTemplate";
import { DashboardView } from "@client/views/Dashboard";

const Page: NextPageWithLayout = () => <DashboardView />;

Page.getLayout = function getLayout(page: ReactElement) {
  return <DashboardTemplate>{page}</DashboardTemplate>;
};
   
  export default Page;