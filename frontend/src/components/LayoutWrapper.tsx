import Layout from "./Layout";
import { Outlet } from "react-router-dom";

const LayoutWrapper = () => (
  <Layout>
    <main>
      <Outlet />
    </main>
  </Layout>
);

export default LayoutWrapper;
