import type { ReactElement } from "react";
import { getServerSession } from "next-auth/next";
import type { NextPageWithLayout } from "@client/pages/_app";
import { AuthCallbackView } from "@client/views/auth-callback";
import { PublicLayout } from "@client/shared/components/layout";

const Page: NextPageWithLayout = () => <AuthCallbackView />;

Page.getLayout = function getLayout(page: ReactElement) {
  return <PublicLayout>{page}</PublicLayout>;
};

export async function getServerSideProps(context: any) {
  const session = await getServerSession(context.req, context.res, {});

  if (session) {
    return {
      redirect: {
        destination: "/dashboard",
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
}

export default Page;
