
import { AuthenticatedNavigationBar } from "../organisms/AuthenticatedNavigationBar";
const AuthenticatedLayout = ({ children }: any) => {
    return (
      <>
        <AuthenticatedNavigationBar />

        <main>{children}</main>
      </>
    );
  };
  
  export default AuthenticatedLayout;
  