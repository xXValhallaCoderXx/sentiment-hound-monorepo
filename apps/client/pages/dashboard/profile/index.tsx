// import { withPageAuthRequired } from "@auth0/nextjs-auth0";

// export default function Profile({ user }: any) {
//   return <div>Hello {user.name}</div>;
// }

// // You can optionally pass your own `getServerSideProps` function into
// // `withPageAuthRequired` and the props will be merged with the `user` prop
// export const getServerSideProps = withPageAuthRequired();

import type { ReactElement } from "react";
import type { NextPageWithLayout } from "@client/pages/_app";
import DashboardTemplate from "@client/shared/components/templates/DashboardTemplate";

const Page: NextPageWithLayout = () => <div>Profile</div>;

Page.getLayout = function getLayout(page: ReactElement) {
  return <DashboardTemplate>{page}</DashboardTemplate>;
};

export default Page;
