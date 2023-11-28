import type { ReactElement } from "react";
// import { getServerSession } from "next-auth/next";
import type { NextPageWithLayout } from "@client/pages/_app";
import { DashboardPageView } from "@client/views/dashboard";
import { AuthenticatedLayout } from "@client/shared/components/layout";

const Page: NextPageWithLayout = () => <DashboardPageView />;

Page.getLayout = function getLayout(page: ReactElement) {
  return <AuthenticatedLayout>{page}</AuthenticatedLayout>;
};

// export async function getServerSideProps(context: any) {
//   const session = await getServerSession(context.req, context.res, {});

//   if (!session) {
//     return {
//       redirect: {
//         destination: "/",
//         permanent: false,
//       },
//     };
//   }

//   return {
//     props: { session },
//   };
// }

export default Page;
