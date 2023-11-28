const PublicLayout = ({ children }: any) => {
  return (
    <>
      <div>Header</div>
      <main>{children}</main>
      <div>Footer</div>
    </>
  );
};

export default PublicLayout;
