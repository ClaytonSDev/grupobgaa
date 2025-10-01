// src/components/Layout.tsx
import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { PageWrapper } from "../styles/LayoutStyles";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <Navbar />
      <PageWrapper>{children}</PageWrapper>
      <Footer />
    </>
  );
};

export default Layout;
