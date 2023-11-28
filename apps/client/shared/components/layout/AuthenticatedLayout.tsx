import { signOut } from "next-auth/react"
const AuthenticatedLayout = ({ children }: any) => {
    return (
      <>
        <div>Header</div>
        <button onClick={() => signOut()}>Sign out</button>
        <main>{children}</main>
        <div>Footer</div>
      </>
    );
  };
  
  export default AuthenticatedLayout;
  