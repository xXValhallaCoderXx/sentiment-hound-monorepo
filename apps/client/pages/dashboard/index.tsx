// import Image from "next/image";
// import { Inter } from "next/font/google";
// import { useUser } from "@auth0/nextjs-auth0/client";
import DashboardTemplate from "@client/shared/components/templates/DashboardTemplate";
import { DashboardView } from "@client/views/Dashboard";
const DashboardPage = () => {
  return (
    <DashboardTemplate>
      <DashboardView />
    </DashboardTemplate>
  );
};

export default DashboardPage;
