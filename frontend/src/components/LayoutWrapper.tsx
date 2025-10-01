import Layout from "./Layout";
import { Outlet } from "react-router-dom";

const LayoutWrapper = () => (
  <Layout>
    <Outlet />
  </Layout>
);

export default LayoutWrapper;
