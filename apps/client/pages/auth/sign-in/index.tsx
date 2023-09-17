import type { ReactElement } from "react";
import type { NextPageWithLayout } from "@client/pages/_app";
import PublicTemplate from "@client/shared/components/templates/PublicTemplate";
import { SignInPageView } from "@client/views/SignIn";

const Page: NextPageWithLayout = (props) => <SignInPageView {...props} />;

Page.getLayout = function getLayout(page: ReactElement) {
  return <PublicTemplate>{page}</PublicTemplate>;
};

export const getServerSideProps = async () => {
  const res = await fetch(
    "http://localhost:3000/api/v1/task/cllzajxcf0000trpdn6lqmyi6"
  );
  const repo = await res.json();
  console.log("REPO: ", repo);
  return { props: { repo } };
};

export default Page;
