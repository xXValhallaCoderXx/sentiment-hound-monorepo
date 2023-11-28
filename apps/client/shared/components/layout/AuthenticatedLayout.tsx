const AuthenticatedLayout = ({ children }: any) => {
    return (
      <>
        <div>Header</div>
        <main>{children}</main>
        <div>Footer</div>
      </>
    );
  };
  
  export default AuthenticatedLayout;
  