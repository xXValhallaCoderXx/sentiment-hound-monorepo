import type { ReactElement } from "react";
import type { NextPageWithLayout } from "@client/pages/_app";
import PublicTemplate from "@client/shared/components/templates/PublicTemplate";
import { SignInPageView } from "@client/views/SignInPage";

const Page: NextPageWithLayout = () => <SignInPageView />;

Page.getLayout = function getLayout(page: ReactElement) {
  return <PublicTemplate>{page}</PublicTemplate>;
};

export default Page;

{
  /* <main
className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
>
<a href="/api/auth/login">Login</a>
{user && (
  <div>
    {/* <Image
      height={100}
      width={100}
      src={user.picture ?? ""}
      alt={user.name ?? ""}
    /> 
    <h2>{user.name}</h2>
    <p>{user.email}</p>
  </div>
)}
</main> */
}
