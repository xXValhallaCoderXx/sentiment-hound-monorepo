import { PublicNavigationBar } from "../organisms/PublicNavigationBar";

const PublicLayout = ({ children }: any) => {
  return (
    <div style={{ height: "100%" }}>
      <PublicNavigationBar />
      <main>{children}</main>
    </div>
  );
};

export default PublicLayout;
